import './Menu.css';
import { Link, NavLink } from 'react-router-dom';

function Menu({ isOpen, onClose }) {
    return (
        <div className={ isOpen ? `menu menu_opened` : `menu`}>
            <div className='menu__case'>
                <button type='button' className='menu__close-btn' onClick={onClose}></button>
                <div className='menu__nav'>
                    <NavLink exact to='/' className='menu__nav-link page__link'>Главная</NavLink>
                    <NavLink to='/movies' className='menu__nav-link menu__nav-movies page__link'>Фильмы</NavLink>
                    <NavLink to='/saved-movies' className='menu__nav-link menu__nav_saved-movies page__link'>Сохраненные фильмы</NavLink>
                    <Link to='/profile' className='menu__nav_profile-btn page__link'>
                        <button type='button' className='menu__nav_profile-btn page__link'></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Menu