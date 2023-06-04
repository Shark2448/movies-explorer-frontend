import './Promo.css';

function Promo() {
    return (
        <>
        <section className='promo'>
            <div className='promo-hero'>
                <h1 className='promo-hero__title'>Учебный проект студента факультета Веб-разработки.</h1>
                <ul className='promo-nav'>
                    <li className='promo-nav__button'>О проекте</li>
                    <li className='promo-nav__button'>Технологии</li>
                    <li className='promo-nav__button'>Студент</li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Promo