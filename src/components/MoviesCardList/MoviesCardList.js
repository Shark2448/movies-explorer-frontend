import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { Route } from 'react-router-dom';
import { useState } from 'react';

function MoviesCardList({  
    movies,
    userMovies,
    saveMovie,
    deleteMovie,
}) {
    // const screenWidth = window.screen.width;
    // const moviesLength = movies.length

    // let amountOfMovies = 8;

    // if (screenWidth >= 1280) { amountOfMovies = 12 };
    // if (screenWidth >= 768 && screenWidth < 1279) { amountOfMovies = 8 };
    // if (screenWidth <= 767) { amountOfMovies = 5 };

    // const [isAmountOfMovies, setIsAmountOfMovies] = useState(amountOfMovies);

    // function resize() {
    //     if (screenWidth >= 1280) {setIsAmountOfMovies(12)}
    //     if (screenWidth >= 768 && screenWidth < 1279) {setIsAmountOfMovies(8)}
    //     if (screenWidth <= 767) {setIsAmountOfMovies(5)}
    // }

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