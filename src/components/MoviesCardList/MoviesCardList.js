import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { Route } from 'react-router-dom';

function MoviesCardList() {
    return (
        <>
        
        <section className='movies__cardList'>
        <Route path='/movies'>
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
        </Route>

        <Route path='/saved-movies'>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
        </Route>
        </section>
        </>
    )
}

export default MoviesCardList