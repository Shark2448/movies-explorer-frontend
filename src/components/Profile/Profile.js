import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../CurrentUserContext/CurrentUserContext';
import Header from '../Header/Header';
import './Profile.css';
import { useFormValidation } from '../FormValidation.js/FormValidation';

function Profile({ onOpen, leave, changeUserInfo }) {
    const user = React.useContext(CurrentUserContext)
    
    
    const { handlechangeValues, isValid, resetFormValues } = useFormValidation()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [validName, setValidName] = useState(false)
    const [validEmail, setValidEmail] = useState(false)

    const btnClassName = `profile__edit-btn page__link ${isValid && (validName || validEmail) ? ' ' : 'profile__edit-btn_disabled'}`

    useEffect(() => {
        if (user.name !== name) {
            setValidName(true)
        } else {
            setValidName(false)
        }
    }, [name, user.name])
    
    useEffect(() => {
        const regex = /(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/
        if (user.email !== email && regex.test(email)) {
            setValidEmail(true)
        } else {
            setValidEmail(false)
        }
    }, [email, user.email])

    useEffect(() => {
        setName(user.name)
        setEmail(user.email)
    }, [user])

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        changeUserInfo({
            name, email
        })
        resetFormValues()
    }

    return (
        <>
            <Header onOpen={onOpen}/>
            <main>
                <section className='profile'>
                    <h3 className='profile__title'>Привет, {user.name}!</h3>
                    <form className='profile__form' onChange={handlechangeValues} onSubmit={handleSubmit}>
                        <div className='profile__case-name'>
                            <p className='profile__name-title'>Имя</p>
                            <input name='name' className='profile__name' value={name || ''} onChange={handleChangeName} minLength='2' maxLength='30' placeholder='Виталий' required></input>
                        </div>
                        <div className='profile__case-email'>
                            <p className='profile__name-title'>E-mail</p>
                            <input name='email' className='profile__name' value={email || ''} onChange={handleChangeEmail} minLength='2' placeholder='pochta@yandex.ru' required></input>
                        </div>
                        <button type='submit' className={btnClassName} disabled={isValid && (validName || validEmail) ? false : true}>Редактировать</button>
                        <p className='profile__logoff-btn page__link' onClick={leave}>Выйти из аккаунта</p>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Profile