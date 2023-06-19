import { useEffect } from 'react';
import Pattern from '../Pattern/Pattern';
import './Register.css';

function Register({ useFormValidation, registration }) {
    const { values, errors, isValid, isEmailValid, handleChangeValues, resetFormValues } = useFormValidation()

    useEffect(() => {
        resetFormValues()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        registration(values.email, values.password, values.name)
        resetFormValues()
    }

    return (   
        <Pattern 
        title='Добро пожаловать!' 
        btnName='Зарегистрироваться'
        text='Уже зарегистрированы?' 
        pageLink='/signin' 
        link='Войти'
        handleSubmit={handleSubmit}
        handleChangeValues={handleChangeValues}
        errors={errors}
        isValid={isValid}
        isEmailValid={isEmailValid} >
            <label for='name' className='pattern__input-title'>Имя</label>
            <input className='pattern__input pattern__border' placeholder='Виталий' required></input>
        </Pattern>
    )
}

export default Register