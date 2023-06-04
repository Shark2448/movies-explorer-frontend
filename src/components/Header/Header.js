import './Header.css';
import logo from '../../images/HeaderLogo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <header className='header'>
            <Link to='/'>
                <img src={logo} className='header__logo' alt='Лого' />
            </Link>
            <Navigation />
        </header>
    )
}

export default Header