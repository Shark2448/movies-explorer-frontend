import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import MoreMovies from '../MoreMovies/MoreMovies';

function Movies({ onOpen }) {
    return (
        <>
        <Header onOpen={onOpen}/>
        <main>
            <SearchForm />
            <MoviesCardList />
            <MoreMovies />
        </main>
        <Footer />
        </>
    )
}

export default Movies