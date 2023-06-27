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

const useLocalStorage = (keys) => {
  return keys.reduce((acc, key) => {
    acc[key] = localStorage.getItem(key)
    return acc
  }, {})
}

const setLocalStorageData = (data) => {
  Object.entries(data).forEach(([key, value]) => {
    localStorage.setItem(key, value)
  })
}

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

  const {
    movies: localMoviesJson, 
    movieList: moviesListJson,
    loggedIn: login,
    localSearch,
    localSearching,
    searchMovies: valueSearchMovies,
    searchUserMovies: valueSearchUserMovies,
    filterMovie
  } = useLocalStorage([
    'movies', 
    'movieList', 
    'loggedIn',
    'localSearch',
    'localSearching',
    'searchMovies',
    'searchUserMovies',
    'filterMovie',
  ])

  let localMovies = localMoviesJson ? JSON.parse(localMoviesJson) : [];
  let moviesList = moviesListJson ? JSON.parse(moviesListJson) : [];

  const filteredMoviesFalse = false;
  const filteredMoviesTrue = true;
  const firstLocalSearch = true; 
  
  function openMenu() {
    setIsMenu(true)
  }

  function closeMenu() {
    setIsMenu(false)
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

  function handleRegistration(email, password, name) {
    mainApi.register(email, password, name)
    .then(() => {
      handleAuthorization(email, password)
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

  function handleAuthorization(email, password) {
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
      history.push('/movies')
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
      const token = localStorage.getItem('token')
      localStorage.setItem('searchUserMovies', ' ')
      setIsLoading(true)
      mainApi.getUserMovies(token)
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
    setCurrentUserMovies(userMovies)
  }, [userMovies]);

  useEffect(() => {
    if (localMovies === null) {
      setCurrentMovies(movies)
    } else {
      setCurrentMovies(localMovies)
      if (movies.length === 0 && localSearching !== null) {
        setNotFoundError(true)
      } else {
        setNotFoundError(false)
      }
    }
  }, [movies])

  useEffect(() => {
    if (filterMovie === 'true') {
      setFilteredMovies(true)
    } else {
      setFilteredMovies(false)    
    }
  })

  function useFilterMovies() {
    setFilteredMovies(!filteredMovies)

    if (localMovies !== null) {
      if (filterMovie === 'true') {
        const condition = (movie) => movie.nameRU.toLowerCase().includes(valueSearchMovies.toLowerCase())
        setLocalStorageData({
          movies: JSON.stringify(moviesList.filter(condition)),
          filterMovie: filteredMoviesFalse 
        })

        setMovies(moviesList)
      } else {
        const condition = (movie) => movie.nameRU.toLowerCase().includes(valueSearchMovies.toLowerCase()) && movie.duration <= 40
        setLocalStorageData({
          movies: JSON.stringify(moviesList.filter(condition)),
          filterMovie: filteredMoviesTrue
        }) 

        setMovies((movies) => movies.filter((movie) => movie.duration <= 40))
      }
    }
  }

  function useFilterUserMovies() {
    setFilteredUserMovies(!filteredUserMovies)

    if (!filteredUserMovies) {
      setCurrentUserMovies((movies) => movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(valueSearchUserMovies.toLocaleLowerCase()) && movie.duration <= 40))
    } else {
      setCurrentUserMovies((movies) => movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(valueSearchUserMovies.toLocaleLowerCase())))
    }
  }

  function handleSaveMovie(movie) {
    mainApi.likeMovie(movie)
    .then((res) => {
      setUserMovies([res, ...userMovies])
    })
    .catch((err) => {
      console.log(err)
    })
  }

  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie._id)
    .then(() => {
      setUserMovies((movies) => movies.filter((i) => i._id !== movie._id))
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const filterMoviesByCondition = (movies, condition) => movies.filter(condition)

  const setMoviesByCondition = (condition) => {
    setMovies((movies) => {
      const filteredMovies = filterMoviesByCondition(movies, condition)
      setLocalStorageData({
        movies: filteredMovies
      })
      return filteredMovies
    })
  }

  function searchMoviesApi(value) {
    setIsLoading(true)
    moviesApi.getMovies()
    .then((movies) => {
      setLocalStorageData({
        localSearch: firstLocalSearch,
        movieList: JSON.stringify(movies),
        filterMovie: filteredMovies,
        movies: JSON.stringify(movies)
      })

      if (filteredMovies === false) {
        const condition = (movie) => movie.nameRU.toLowerCase().includes(value.search?.toLowerCase())
        setMoviesByCondition(condition)
      } else {
        const condition = (movie) => movie.nameRU.toLowerCase().includes(value.search?.toLowerCase()) && movie.duration <= 40
        setMoviesByCondition(condition)
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
      setCurrentUserMovies((movies) => movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(value.search?.toLowerCase()) && movie.duration <= 40))
    } else {
      setCurrentUserMovies((movies) => movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(value.search?.toLowerCase())))
    }
  }

  function searchMoviesLocal(value) {
    setLocalStorageData({
      filterMovie: filteredMovies,
      movies: JSON.stringify(moviesList)
    })
      if (filteredMovies === false) {
        const condition = (movie) => movie.nameRU.toLowerCase().includes(value.search?.toLowerCase())
        setLocalStorageData({
          movies: JSON.stringify(moviesList.filter(condition))
        })

        setMovies((movies) => movies.filter((movie) => 
        movie.nameRU.toLowerCase().includes(value.search?.toLowerCase())))
      } else {
        const condition = (movie) => movie.nameRU.toLowerCase().includes(value.search?.toLowerCase()) && movie.duration <= 40
        setLocalStorageData({
          movies: JSON.stringify(moviesList.filter(condition))
        }) 

        setMovies((movies) => movies.filter((movie) => 
        movie.nameRU.toLowerCase().includes(value.search?.toLowerCase()) && movie.duration <= 40))
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
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
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
            handleDeleteMovie={handleDeleteMovie}
            searchUserMovies={searchUserMovies}
            useFilterMovies={useFilterUserMovies}
            />
          <ProtectedRoute path='/profile'
            component={Profile}
            loggedIn={login} 
            onOpen={openMenu} 
            leave={leave} 
            changeUserInfo={changeUserInfo} />
          <ProtectedRouteAuth path='/signup' 
            component={Register} 
            loggedIn={login} 
            handleRegistration={handleRegistration} 
            textError={textError} 
            submitError={errorRegistry} />
          <ProtectedRouteAuth path='/signin' 
            component={Login} 
            loggedIn={login} 
            handleAuthorization={handleAuthorization} 
            textError={textError} 
            submitError={errorLogin} />
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
