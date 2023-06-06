import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

function Navigation({ onOpen }) {
    return (
        <section className='navigation'>
            <NavLink to='/movies' className='navigation__movies page__link'>Фильмы</NavLink>
            <NavLink to='/saved-movies' className='navigation__movies navigation__movies-saved page__link'>Сохраненные фильмы</NavLink>
            <Link to='/profile' className='navigation__button-profile page__link'>
                <button type='button' className='navigation__button-profile page__link'></button>
            </Link>
            <button type='button' className='navigation__button-menu page__link' onClick={onOpen}></button>
        </section>
    )
}

export default Navigation