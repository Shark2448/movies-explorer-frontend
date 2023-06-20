import './Techs.css';
import '../Main/Main.css';

function Techs() {
    return (
        <section id='techs' className='techs'>
            <p className='main__subtitle'>Технологии</p>
            <div className='techs__main'>
                <p className='techs__title'>7 технологий</p>
                <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className='techs__box'>
                    <li className='techs__case'>HTML</li>
                    <li className='techs__case'>CSS</li>
                    <li className='techs__case'>JS</li>
                    <li className='techs__case'>React</li>
                    <li className='techs__case'>Git</li>
                    <li className='techs__case'>Express.js</li>
                    <li className='techs__case'>mongoDB</li>
                </ul>
            </div>
        </section>
    )
}

export default Techs