import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__case'>
                <p className='footer__text footer__text-copyright'>© 2020</p>
                <nav className='footer__nav'>
                    <nav className='footer__links'>
                        <a href='https://practicum.yandex.ru/' className='footer__link footer__text page__link'>Яндекс.Практикум</a>
                        <a href='https://github.com/' className='footer__link footer__text page__link'>Github</a>
                    </nav>
                </nav>
            </div>
        </footer>
    )
}

export default Footer