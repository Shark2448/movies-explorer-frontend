import Pattern from '../Pattern/Pattern';
import './Login.css';

function Login() {
    return (
        <Pattern title='Рады видеть!' btnName='Войти' text='Еще не зарегистрированы?'
        pageLink='/signup' link='Регистрация'/>
    )
}

export default Login