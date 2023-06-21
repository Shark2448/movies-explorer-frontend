import './MoviesCard.css';
import { Route } from 'react-router-dom';

function MoviesCard({ movie, saveMovie, deleteMovie, userMovies }) {
    const isLiked = userMovies.some((i) => i.movieId === movie.id)

    function handleDeleteMovie() {
        deleteMovie(movie)
    }

    function handleLikeClick() {
        if (isLiked) {
            userMovies.some((i) => {
                if (i.movieId === movie.id) {
                    deleteMovie(i)
                }
            })
        } else {
            saveMovie(movie)
        }
    }

    function timeOnCard(min) {
        return min + ' ' + 'минут'
    }

    const cardSaveBtnClassName = `card__save-btn page__link ${
        isLiked ? 'card__save-btn_active' : ' '
    }`

    
    const image = typeof movie.image === 'string' ? movie.image : movie.image.url

    return (
        <>
        <Route path='/movies'>
        <div className='card'>
            <div className='card__upper'>
                <h3 className='card__movie-title'>{movie.nameRU}</h3>
                <p className='card__movie-time'>{timeOnCard(movie.duration)}</p>
            </div>
            <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
                <img src={'https://api.nomoreparties.co/' + image} className='card__img' alt='Фильм'/>
            </a>
            <div className='card__under'>
                <button type='button' className={cardSaveBtnClassName} onClick={handleLikeClick}></button>
            </div>
        </div>
        </Route>

        <Route path='/saved-movies'>
        <div className='card'>
            <div className='card__upper'>
                <h3 className='card__movie-title'>{movie.nameRU}</h3>
                <p className='card__movie-time'>{timeOnCard(movie.duration)}</p>
            </div>
            <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
                <img src={`https://api.nomoreparties.co/` + image} className='card__img' alt='Фильм'/>
            </a>
            <div className='card__under'>
                <button id='btn' type='button' className='card__delete-btn page__link' onClick={handleDeleteMovie}></button>
            </div>
        </div>
        </Route>
        </>
    )
}

export default MoviesCard