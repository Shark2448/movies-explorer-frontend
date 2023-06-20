import './AboutMe.css';
import '../Main/Main.css';
import photo from '../../images/aboutMePhoto.png';

function AboutMe() {
    return (
        <section id='aboutMe' className='aboutMe'>
            <p className='main__subtitle'>Студент</p>
            <div className='aboutMe__case'>
                <div className='aboutMe__profile'>
                    <p className='aboutMe__name'>Виталий</p>
                    <p className='aboutMe__job'>Фронтенд-разработчик, 30 лет</p>
                    <p className='aboutMe__about'>Я родился и живу в Саратове, закончил факультет экономики СГУ.
                    У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                    С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a href='https://github.com/' target='_blank' rel='noreferrer' className='aboutMe__git page__link'>Github</a>
                </div>
                <img src={photo} className='aboutMe__photo' alt='фотография' />
            </div>
        </section>
    )
}

export default AboutMe