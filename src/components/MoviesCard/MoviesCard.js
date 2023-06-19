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

    return (
        <>
        <Route path='/movies'>
        <div className='card'>
            <div className='card__upper'>
                <h3 className='card__movie-title'>{movie.nameRU}</h3>
                <p className='card__movie-time'>{movie.duration}</p>
            </div>
            <img src={`https://api.nomoreparties.co/` + movie.image.url} className='card__movie' alt='Фильм'/>
            <div className='card__under'>
                <button id='btn' type='button' className='card__save-btn page__link' onClick={handleLikeClick}>Сохранить</button>
            </div>
        </div>
        </Route>

        <Route path='/saved-movies'>
        <div className='card'>
            <div className='card__upper'>
                <h3 className='card__movie-title'>{movie.nameRU}</h3>
                <p className='card__movie-time'>{movie.duration}</p>
            </div>
            <img src={`https://api.nomoreparties.co/` + movie.image.url} className='card__movie' alt='Фильм'/>
            <div className='card__under'>
                <button id='btn' type='button' className='card__delete-btn page__link' onClick={handleDeleteMovie}></button>
            </div>
        </div>
        </Route>
        </>
    )
}

export default MoviesCard