import { useEffect, useState } from 'react';
import './MoreMovies.css';

function MoreMovies({ movies }) {
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

    const btnClassName = `more-movies__btn page__link ${
        needMoreMovies ? 'more-movies__btn_disabled' : ' '
    }`

    return (
        <section className='more-movies'>
            <button type='button' className={btnClassName} onClick={handleClickMoreMovies}></button>
        </section>
    )
}

export default MoreMovies