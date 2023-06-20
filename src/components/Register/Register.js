import Pattern from '../Pattern/Pattern';
import './Register.css';

function Register() {
    return (   
        <Pattern title='Добро пожаловать!' btnName='Зарегистрироваться'
        text='Уже зарегистрированы?' pageLink='/signin' link='Войти'>
            <label for='name' className='pattern__input-title'>Имя</label>
            <input className='pattern__input pattern__border' placeholder='Виталий' required></input>
        </Pattern>
    )
}

export default Register