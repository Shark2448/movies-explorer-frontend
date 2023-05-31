import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__case'>
                <p className='footer__text footer__text-copyright'>© 2020</p>
                <nav className='footer__nav'>
                    <ul className='footer__links'>
                        <li className='footer__link footer__text'>Яндекс.Практикум</li>
                        <li className='footer__link footer__text'>Github</li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer