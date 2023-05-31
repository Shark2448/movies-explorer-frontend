import './Header.css';
import logo from '../../images/HeaderLogo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <Link to='/'>
                <img src={logo} className='header__logo' alt='Лого' />
            </Link>
            <div className='header__links'>
                <Link className='header__registry'>
                    Регистрация
                </Link>
                <Link className='header__signin'>
                    Войти
                </Link>
            </div>
        </header>
    )
}

export default Header