import { useEffect } from 'react';
import Pattern from '../Pattern/Pattern';
import './Login.css';
import { useFormValidation } from '../FormValidation.js/FormValidation';

function Login({ authorization, submitError, textError }) {
    const { values, errors, isValid, isEmailValid, handleChangeValues, resetFormValues } = useFormValidation()

    useEffect(() => {
        resetFormValues()
    }, [resetFormValues])

    function handleSubmit(e) {
        e.preventDefault()
        authorization(values.email, values.password)
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
        textError={textError} />
    )
}

export default Login