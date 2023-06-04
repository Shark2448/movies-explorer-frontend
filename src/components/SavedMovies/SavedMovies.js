import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoreMovies from '../MoreMovies/MoreMovies';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies() {
    return (
        <>
        <Header />
        <main>
            <SearchForm />
            <MoviesCardList />
            <MoreMovies />
        </main>
        <Footer />
        </>
    )
}

export default SavedMovies