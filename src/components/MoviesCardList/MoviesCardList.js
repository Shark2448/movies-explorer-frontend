import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { Route } from 'react-router-dom';

function MoviesCardList({  
    movies,
    userMovies,
    saveMovie,
    deleteMovie,
}) {

    return (
        <>
        <section className='movies__cardList'>
        <Route path='/movies'>
            {movies.map((movie) => {
                return (
                    <MoviesCard movie={movie} key={movie.nameRU} saveMovie={saveMovie} deleteMovie={deleteMovie} userMovies={userMovies} />
                )
            })}
        </Route>

        <Route path='/saved-movies'>
                {movies.map((movie) => (
                    <MoviesCard movie={movie} key={movie.nameRU} saveMovie={saveMovie} deleteMovie={deleteMovie} userMovies={userMovies} />
                ))}
        </Route>
        </section>
        </>
    )
}

export default MoviesCardList