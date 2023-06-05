import './ErrorNotFound.css';

function ErrorNotFound() {
    return (
        <section className='error-not-found'>
            <h1 className='error-not-found__code'>404</h1>
            <p className='error-not-found__message'>Страница не найдена</p>
            <p className='error-not-found__back-btn'>Назад</p>
        </section>
    )
}

export default ErrorNotFound