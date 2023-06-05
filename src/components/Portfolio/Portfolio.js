import './Portfolio.css';
import arrow from '../../images/PortfolioArr.svg';

function Portfolio() {
    return (
        <section className='portfolio'>
            <p className='portfolio__title'>Портфолио</p>
            <ul className='portfolio__links'>
                <li className='portfolio__link-case'>
                    <a href='##' target='_blank' className='portfolio__link'>
                        <p className='portfolio__link-name'>Статичный сайт</p>
                        <img src={arrow} className='portfolio__link-img page__link' alt='стрелка'/>
                    </a>
                </li>
                <li className='portfolio__link-case'>
                    <a href='##' target='_blank' className='portfolio__link'>
                        <p className='portfolio__link-name'>Адаптивный сайт</p>
                        <img src={arrow} className='portfolio__link-img page__link' alt='стрелка'/>
                    </a>
                </li>
                <li className='portfolio__link-case'>
                    <a href='##' target='_blank' className='portfolio__link'>
                        <p className='portfolio__link-name'>Одностраничное приложение</p>
                        <img src={arrow} className='portfolio__link-img page__link' alt='стрелка'/>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio