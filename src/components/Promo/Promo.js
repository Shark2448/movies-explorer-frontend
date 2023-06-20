import './Promo.css';

function Promo() {
    return (
        <>
        <section className='promo'>
            <div className='promo-hero'>
                <h1 className='promo-hero__title'>Учебный проект студента факультета Веб-разработки.</h1>
                <nav className='promo-nav'>
                    <a href='#aboutProject' className='promo-nav__button page__link'>О проекте</a>
                    <a href='#techs' className='promo-nav__button page__link'>Технологии</a>
                    <a href='#aboutMe' className='promo-nav__button page__link'>Студент</a>
                </nav>
            </div>
        </section>
        </>
    )
}

export default Promo