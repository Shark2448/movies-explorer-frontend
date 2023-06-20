import './Pattern.css';
import { Link } from 'react-router-dom';

function Pattern({ title, btnName, text, pageLink, link, children }) {
    return (
        <form className='pattern'>
            <Link to='/' className='pattern__logo page__link' alt='Логотип'></Link>
            <h2 className='pattern__title'>{title}</h2>
            {children}
            <label for='email' className='pattern__input-title'>E-mail</label>
            <input type='email' className='pattern__input pattern__border' placeholder='pochta@yandex.ru' required></input>
            <label for='password' className='pattern__input-title'>Пароль</label>
            <input type='password' className='pattern__input pattern__border form__input-password' required></input>
            <span className='pattern__input-error'>Что то пошло не так...</span>
            <div className='pattern__under'>
                <button type='submit' className='pattern__btn'>{btnName}</button>
                <div className='pattern__under-btn'>
                    <p className='pattern__text'>{text}</p>
                    <Link to={pageLink} className='pattern__link page__link'>{link}</Link>
                </div>
            </div>
        </form>
    )
}

export default Pattern