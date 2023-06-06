import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isMenu, setIsMenu] = useState(false);

  function openMenu() {
    setIsMenu(true)
  }

  function closeMenu() {
    setIsMenu(false)
  }


  return (
    <div className="page">
      <Switch>
        <Route exact path='/'>
          <Main onOpen={openMenu}/>
        </Route>
        <Route path='/movies'>
          <Movies onOpen={openMenu}/>
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies onOpen={openMenu}/>
        </Route>
        <Route path='/profile'>
          <Profile  onOpen={openMenu}/>
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/404'>
          <ErrorNotFound />
        </Route>
      </Switch>
      <Menu isOpen={isMenu} onClose={closeMenu}/>
    </div>
  );
}

export default App;
