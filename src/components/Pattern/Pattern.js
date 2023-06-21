import './Pattern.css';
import { Link } from 'react-router-dom';

function Pattern({ title, btnName, text, pageLink, link, children, isValid, errors, handleChangeValues, handleSubmit, submitError, textError }) {
    const errorClassName = `pattern__input-error ${submitError ? 'pattern__input-error_active' : ' '}`
    const emailInputClassName = `pattern__input pattern__border ${errors.email === '' ? ' ' : 'pattern__input_error'}`
    const passwordInputClassName = `pattern__input pattern__border pattern__input-password ${errors.password === '' ? ' ' : 'pattern__input_error'}`
    const btnClassName = `pattern__btn ${isValid ? ' ' : 'pattern__btn_disabled'}`

    return (
        <form className='pattern' onSubmit={handleSubmit} onChange={handleChangeValues} noValidate>
            <Link to='/' className='pattern__logo page__link' alt='Логотип'></Link>
            <h2 className='pattern__title'>{title}</h2>
            {children}
            <label htmlFor='email' className='pattern__input-title'>E-mail</label>
            <input type='email' name='email' className={emailInputClassName} placeholder='pochta@yandex.ru' minLength='2' required></input>
            <label htmlFor='password' className='pattern__input-title'>Пароль</label>
            <input type='password' name='password' className={passwordInputClassName} minLength='2' maxLength='30' required></input>
            <span className={errorClassName}>Что то пошло не так...</span>
            <div className='pattern__under'>
                <button type='submit' className={btnClassName} disabled={isValid ? false : true} >{btnName}</button>
                <div className='pattern__under-btn'>
                    <p className='pattern__text'>{text}</p>
                    <Link to={pageLink} className='pattern__link page__link'>{link}</Link>
                </div>
            </div>
        </form>
    )
}

export default Pattern