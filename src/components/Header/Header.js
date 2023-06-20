import './Header.css';
import logo from '../../images/HeaderLogo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ onOpen }) {
    return (
        <header className='header'>
            <Link to='/'>
                <img src={logo} className='header__logo page__link' alt='Лого' />
            </Link>
            <Navigation onOpen={onOpen}/>
        </header>
    )
}

export default Header