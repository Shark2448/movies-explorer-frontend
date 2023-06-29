import { useEffect } from 'react';
import Pattern from '../Pattern/Pattern';
import './Login.css';
import { useFormValidation } from '../FormValidation.js/FormValidation';

function Login({ handleAuthorization, submitError, textErrorLogin }) {
    const { values, errors, isValid, isEmailValid, handleChangeValues, resetFormValues } = useFormValidation()

    useEffect(() => {
        resetFormValues()
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        handleAuthorization(values.email, values.password)
        resetFormValues()
    }

    return (
        <Pattern 
        title='Рады видеть!' 
        btnName='Войти' 
        text='Еще не зарегистрированы?'
        pageLink='/signup' 
        link='Регистрация' 
        handleSubmit={handleSubmit} 
        handleChangeValues={handleChangeValues} 
        isValid={isValid}
        isEmailValid={isEmailValid}
        errors={errors}
        submitError={submitError}
        textErrorLogin={textErrorLogin} />
    )
}

export default Login