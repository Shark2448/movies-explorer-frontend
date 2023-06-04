import './HeaderPromo.css';
import logo from '../../images/HeaderLogo.svg';
import { Link } from 'react-router-dom';

function HeaderPromo() {
    return (
        <header className='header-promo'>
            <Link to='/'>
                <img src={logo} className='header__logo' alt='Лого' />
            </Link>
            <div className='header-promo__links'>
                <Link to='/signup' className='header__registry'>
                    Регистрация
                </Link>
                <Link to='/signin' className='header__signin'>
                    Войти
                </Link>
            </div>
        </header>
    )
}

export default HeaderPromo