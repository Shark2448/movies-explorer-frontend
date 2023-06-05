import './MoviesCard.css';
import Film from '../../images/Film.png';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function MoviesCard() {
    return (
        <>
        <Route path='/movies'>
        <div className='card'>
            <div className='card__upper'>
                <h3 className='card__movie-title'>В погоне за Бенкси</h3>
                <p className='card__movie-time'>27 минут</p>
            </div>
            <div className='card__movie'>
                <img src={Film} className='card__movie' alt='Фильм'/>
            </div>
            <div className='card__under'>
                <button id='btn' type='button' className='card__save-btn page__link'>Сохранить</button>
            </div>
        </div>
        </Route>

        <Route path='/saved-movies'>
        <div className='card'>
            <div className='card__upper'>
                <h3 className='card__movie-title'>В погоне за Бенкси</h3>
                <p className='card__movie-time'>27 минут</p>
            </div>
            <div className='card__movie'>
                <img src={Film} alt='Фильм'/>
            </div>
            <div className='card__under'>
                <button id='btn' type='button' className='card__delete-btn page__link'></button>
            </div>
        </div>
        </Route>
        </>
    )
}

export default MoviesCard