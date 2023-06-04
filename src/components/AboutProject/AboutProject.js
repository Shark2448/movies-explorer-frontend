import './AboutProject.css';
import '../Main/Main.css';

function AboutProject() {
    return (
        <section className='aboutProject'>
            <p className='main__subtitle'>О проекте</p>
            <div className='aboutProject__case'>
                <div className='aboutProject__column'>
                    <p className='aboutProject__subtitle'>Дипломный проект включал 5 этапов</p>
                    <p className='aboutProject__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='aboutProject__column'>
                    <p className='aboutProject__subtitle'>На выполнение диплома ушло 5 недель</p>
                    <p className='aboutProject__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='aboutProject__bar'>
                <p className='aboutProject__bar-line aboutProject__bar-first aboutProject__bar-text'>1 неделя</p>
                <p className='aboutProject__bar-line aboutProject__bar-second aboutProject__bar-text'>4 недели</p>
            </div>
            <div className='aboutProject__under-bar'>
                <p className='aboutProject__under-bar-line aboutProject__under-bar-first aboutProject__under-bar-text'>Back-end</p>
                <p className='aboutProject__under-bar-line aboutProject__under-bar-second aboutProject__under-bar-text'>Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject