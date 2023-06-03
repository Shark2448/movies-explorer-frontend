import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <section className='navigation'>
            <NavLink to='/movies' className='navigation__movies'>Фильмы</NavLink>
            <NavLink to='/saved-movies' className='navigation__movies navigation__movies-saved'>Сохраненный фильмы</NavLink>
            <Link to='/profile'>
                <button type='button' className='navigation__button-profile'></button>
            </Link>
        </section>
    )
}

export default Navigation