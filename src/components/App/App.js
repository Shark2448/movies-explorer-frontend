import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import { CurrentUserContext } from '../CurrentUserContext/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ProtectedRouteAuth from '../ProtectedRoute/ProtectedRouteAuth';

function App() {
  const history = useHistory();

  const [isMenu, setIsMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [currentUserMovies, setCurrentUserMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(false);
  const [filteredUserMovies, setFilteredUserMovies] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [notFoundError, setNotFoundError] = useState(false);
  const [errorRegistry , setErrorRegistry] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const [textError, setTextError] = useState('');

  const filteredMoviesFalse = false;
  const filteredMoviesTrue = true;
  const firstLocalSearch = true; 

  let localMovies = JSON.parse(localStorage.getItem('movies'));
  let moviesList = JSON.parse(localStorage.getItem('movieList'));
  let login = localStorage.getItem('loggedIn');
  let localSearch = localStorage.getItem('localSearch');
  let localSearching = localStorage.getItem('localSearching')
  let valueSearchMovies = localStorage.getItem('searchMovies');
  let valueSearchUserMovies = localStorage.getItem('searchUserMovies');
  let filterMovie = localStorage.getItem('filterMovie'); 
  
  function openMenu() {
    setIsMenu(true)
  }

  function closeMenu() {
    setIsMenu(false)
  }

  function registration(email, password, name) {
    mainApi.register(email, password, name)
    .then(() => {
      authorization(email, password)
      setTextError('')
      setErrorRegistry(false)
    })
    .catch((err) => {
      console.log(err)
      setErrorRegistry(true)
      if (err === 'Ошибка 400') {
        setTextError('Введены некорректные данные')
      }
      if (err === 'Ошибка 409') {
        setTextError('Данный email уже существует')
      }
      if (err === 'Ошибка 500') {
        setTextError('Произошла ошибка на сервере')
      }
    })
  }

  function authorization(email, password) {
    mainApi.authoriz(email, password)
    .then((data) => {
      const token = localStorage.getItem('token')
      localStorage.setItem('token', data.token)
      mainApi.updateHeaders(token)
      localStorage.setItem('loggedIn', true)
    })
    .then(() => {
      setLoggedIn(true);
      setTextError('')
      setErrorLogin(false)
      history.pushState('/movies')
    })
    .catch((err) => {
      console.log(err)
      setErrorLogin(true)
      if (err === 'Ошибка 400') {
        setTextError('Введены некорректные данные')
      }
      if (err === 'Ошибка 401') {
        setTextError('Введены некорректные email или пароль')
      }
      if (err === 'Ошибка 500') {
        setTextError('Произошла ошибка на сервере')
      }
    })
  }

  function auth(token) {
    const userContent = mainApi.getUserContent(token)
    .then((res) => {
      if (res) {
        setLoggedIn(true)
        setCurrentUser(res)
      }
    })
    .catch((err) => {
      console.log(err)
    })
    return userContent
  }

  function changeUserInfo(email, name) {
    mainApi.changeUserInfo(email, name)
    .then((res) => {
      setCurrentUser(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem('loggedIn', loggedIn)
    }
  }, [loggedIn])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      auth(token)
    }
  }, [loggedIn])

  function leave() {
    localStorage.clear()
    setFilteredMovies(false)
    setMovies([])
    mainApi.deleteHeaders()
    setLoggedIn(false)
    history.push('/')
  }

  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem('searchUserMovies', ' ')
      setIsLoading(true)
      mainApi.getUserMovies()
      .then((res) => {
        setUserMovies(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
    }
  }, [loggedIn]);

  useEffect(() => {
    setCurrentMovies(userMovies)
  }, [userMovies]);

  useEffect(() => {
    if (localMovies === null) {
      setCurrentMovies(movies)
    } else {
      setCurrentMovies(localMovies)
      if (movies.length === 0 && localSearching !== null) {setNotFoundError(true)} else {setNotFoundError(false)}
    }
  }, [movies])

  function useFilterMovies() {
    setFilteredMovies(!filteredMovies)
    if (localMovies !== null) {
      if (filterMovie === 'true') {
        localStorage.setItem('movies', JSON.stringify(moviesList.filter((movie) => 
        movie.nameRU.toLowerCase().includes(valueSearchMovies.toLowerCase()))))
        setMovies(moviesList)
        localStorage.setItem('filterMovie', filteredMoviesFalse)
      } else {
        localStorage.setItem('movies', JSON.stringify(moviesList.filter((movie) => 
        movie.nameRU.toLowerCase().includes(valueSearchMovies.toLowerCase()) && movie.duration <= 40)))
        setMovies((movies) => movies.filter((movie) => movie.duration <= 40))
        localStorage.setItem('filterMovie', filteredMoviesTrue)
      }
    }
  }

  function useFilterUserMovies() {
    setFilteredUserMovies(!filteredUserMovies)
    if (!filteredUserMovies) {
      setCurrentUserMovies(userMovies)
      setCurrentUserMovies((movies) => movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(valueSearchUserMovies.toLocaleLowerCase()) && movie.duration <= 40))
    } else {
      setCurrentUserMovies(userMovies)
      setCurrentUserMovies((movies) => movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(valueSearchUserMovies.toLocaleLowerCase())))
    }
  }

  function saveMovie(movie) {
    mainApi.likeMovie(movie)
    .then((res) => {
      setUserMovies([res, ...userMovies])
    })
    .catch((err) => {
      console.log(err)
    })
  }

  function deleteMovie(movie) {
    mainApi.deleteMovie(movie._id)
    .then((res) => {
      setUserMovies((movies) => movies.filter((i) => i._id !== movie._id))
    })
    .catch((err) => {
      console.log(err)
    })
  }

  function searchMoviesApi(value) {
    setIsLoading(true)
    moviesApi.getMovies()
    .then((movies) => {
      console.log(movies)
      localStorage.setItem('localSearch', firstLocalSearch)
      localStorage.setItem('movieList', JSON.stringify(movies))
      localStorage.setItem('filterMovie', filteredMovies)
      localStorage.setItem('movies', JSON.stringify(movies))
      if (filteredMovies === false) {
        localStorage.setItem('movies', JSON.stringify(movies.filter((movie) => 
        movie.nameRU.toLowerCase().includes(value.search.toLowerCase()))))
        setMovies(movies)
        setMovies((movies) => movies.filter((movie) => 
        movie.nameRU.toLowerCase().includes(value.search.toLowerCase())))
      } else {
        localStorage.setItem('movies', JSON.stringify(movies.filter((movie) => 
        movie.nameRU.toLowerCase().includes(value.search.toLowerCase()) && movie.duration <= 40)))
        setMovies(movies)
        setMovies((movies) => movies.filter((movie) => 
        movie.nameRU.toLowerCase().includes(value.search.toLowerCase()) && movie.duration <= 40))
      }
      setIsSearching(true)
      localStorage.setItem('localSearching', isSearching)
    })
    .catch((err) => {
      console.log(err)
      setSearchError(true)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  function searchUserMovies(value) {
    if (filteredUserMovies) {
      setCurrentUserMovies(userMovies)
      setCurrentUserMovies((movies) => movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(value.search.toLowerCase()) && movie.duration <= 40))
    } else {
      setCurrentUserMovies(userMovies)
      setCurrentUserMovies((movies) => movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(value.search.toLowerCase())))
    }
  }

  function searchMoviesLocal(value) {
      localStorage.setItem('filterMovie', filteredMovies)
      localStorage.setItem('movies', JSON.stringify(moviesList))
      if (filteredMovies === false) {
        localStorage.setItem('movies', JSON.stringify(moviesList.filter((movie) => 
        movie.nameRU.toLowerCase().includes(value.search.toLowerCase()))))
        setMovies(moviesList)
        setMovies((movies) => movies.filter((movie) => 
        movie.nameRU.toLowerCase().includes(value.search.toLowerCase())))
      } else {
        localStorage.setItem('movies', JSON.stringify(moviesList.filter((movie) => 
        movie.nameRU.toLowerCase().includes(value.search.toLowerCase()) && movie.duration <= 40)))
        setMovies(moviesList)
        setMovies((movies) => movies.filter((movie) => 
        movie.nameRU.toLowerCase().includes(value.search.toLowerCase()) && movie.duration <= 40))
      }
    }

    function searchMovies(value) {
      if (localSearch === null || localSearch === 'false') {
        searchMoviesApi(value)
      } else {
        searchMoviesLocal(value)
      }
    }


  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Main loggedIn={loggedIn} onOpen={openMenu}/>
          </Route>
          <ProtectedRoute path='/movies'
            component={Movies}
            loggedIn={login}
            onOpen={openMenu}
            movies={currentMovies}
            userMovies={userMovies}
            isLoading={isLoading}
            useFilterMovies={useFilterMovies}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            searchMovies={searchMovies}
            searchError={searchError}
            notFoundError={notFoundError} />
          <ProtectedRoute path='/saved-movies'
            component={SavedMovies}
            loggedIn={login}
            onOpen={openMenu}
            movies={currentUserMovies}
            userMovies={userMovies}
            isLoading={isLoading}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
            searchUserMovies={searchUserMovies}
            useFilterMovies={useFilterUserMovies}
            />
          <ProtectedRoute path='/profile' component={Profile} loggedIn={login} onOpen={openMenu} leave={leave} changeUserInfo={changeUserInfo} />
          <ProtectedRouteAuth path='/signup' component={Register} loggedIn={login} registration={registration} textError={textError} submitError={errorRegistry} />
          <ProtectedRouteAuth path='/signin' component={Login} loggedIn={login} authorization={authorization} textError={textError} submitError={errorLogin} />
          <Route>
            <ErrorNotFound />
          </Route>
        </Switch>
        <Menu isOpen={isMenu} onClose={closeMenu}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
