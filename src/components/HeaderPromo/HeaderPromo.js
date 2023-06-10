import './HeaderPromo.css';
import logo from '../../images/HeaderLogo.svg';
import { Link } from 'react-router-dom';

function HeaderPromo() {
    return (
        <header className='header-promo'>
            <Link to='/'>
                <img src={logo} className='header-promo__logo page__link' alt='Лого' />
            </Link>
            <div className='header-promo__links'>
                <Link to='/signup' className='header-promo__registry page__link'>
                    Регистрация
                </Link>
                <Link to='/signin' className='header-promo__signin page__link'>
                    Войти
                </Link>
            </div>
        </header>
    )
}

export default HeaderPromo