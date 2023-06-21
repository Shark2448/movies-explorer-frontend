import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MoviesCardList({  
    movies,
    userMovies,
    saveMovie,
    deleteMovie,
    notFoundError,
}) {
    const screenWidth = window.screen.width;
    const moviesLength = movies.length

    let amountOfMovies = 8;

    if (screenWidth >= 1280) { amountOfMovies = 12 };
    if (screenWidth >= 768 && screenWidth < 1279) { amountOfMovies = 8 };
    if (screenWidth <= 767) { amountOfMovies = 5 };

    const [isAmountOfMovies, setIsAmountOfMovies] = useState(amountOfMovies);
    const [needMoreMovies, setNeedMoreMovies] = useState(false)

    useEffect(() => {
        function resize() {
            if (screenWidth >= 1280) {setIsAmountOfMovies(isAmountOfMovies + 3)}
            if (screenWidth >= 768 && screenWidth < 1279) {setIsAmountOfMovies(isAmountOfMovies + 2)}
            if (screenWidth <= 767) {setIsAmountOfMovies(isAmountOfMovies + 5)}
            if (isAmountOfMovies >= moviesLength) {setNeedMoreMovies(true)}
        }

        if (isAmountOfMovies >= moviesLength) {setNeedMoreMovies(true)} else {setNeedMoreMovies(false)}
        window.onresize = resize
    }, [isAmountOfMovies, moviesLength, screenWidth])

    function handleClickMoreMovies() {
        if (screenWidth >= 1280) { amountOfMovies = 12 };
        if (screenWidth >= 768 && screenWidth < 1279) { amountOfMovies = 8 };
        if (screenWidth <= 767) { amountOfMovies = 5 };
    }

    const btnClassName = `movies__cardList_more-movies-btn page__link ${
        needMoreMovies ? 'movies__cardList_more-movies-btn_disabled' : ' '
    }`
    const notFoundErrorClassName = `movies__cardList_error ${
        notFoundError ? 'movies__cardList_error_active' : ''
    }`

    return (
        <>
        <Route path='/movies'>
        <section className='movies__cardList'>
        {movies.map((movie, index) => {
                    if (index >= isAmountOfMovies) {return}
                    return (
                        <MoviesCard movie={movie} key={movie.nameRU} saveMovie={saveMovie} deleteMovie={deleteMovie} userMovies={userMovies} />
                    )}
                    )  
                }   
            <span className={notFoundErrorClassName}></span>
        </section>
            <section className='movies__cardList_more-movies'>
                <button type='button' className={btnClassName} onClick={handleClickMoreMovies}></button>
            </section>
        </Route>

        <Route path='/saved-movies'>
        <section className='movies__cardList'>
                {movies.map((movie) => (
                    <MoviesCard movie={movie} key={movie.nameRU} saveMovie={saveMovie} deleteMovie={deleteMovie} userMovies={userMovies} />
                )) 
                }   
                <span className={notFoundErrorClassName}></span>
                <section className='movies__cardList_more-movies'>
                    <button type='button' className={btnClassName} onClick={handleClickMoreMovies}></button>
                </section>
        </section>
        </Route>
        
        </>
    )
}

export default MoviesCardList