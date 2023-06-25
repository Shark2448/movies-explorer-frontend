import { useEffect } from 'react';
import Pattern from '../Pattern/Pattern';
import './Register.css';
import { useFormValidation } from '../FormValidation.js/FormValidation';

function Register({ handleRegistration, submitError, textError }) {
    const { values, errors, isValid, isEmailValid, handleChangeValues, resetFormValues } = useFormValidation()

    useEffect(() => {
        resetFormValues()
    }, [resetFormValues])

    const handleSubmit = (e) => {
        e.preventDefault()
        handleRegistration(values.email, values.password, values.name)
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
        isEmailValid={isEmailValid}
        submitError={submitError}
        textError={textError} >
            <label htmlFor='name' className='pattern__input-title'>Имя</label>
            <input name='name' className='pattern__input pattern__border' placeholder='Виталий' required></input>
        </Pattern>
    )
}

export default Register