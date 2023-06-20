import './ErrorNotFound.css';
import { useHistory } from 'react-router-dom'

function ErrorNotFound() {
    const history = useHistory();

    return (
        <section className='error-not-found'>
            <h1 className='error-not-found__code'>404</h1>
            <p className='error-not-found__message'>Страница не найдена</p>
            <p className='error-not-found__back-btn page__link' onClick={history.goBack}>Назад</p>
        </section>
    )
}

export default ErrorNotFound