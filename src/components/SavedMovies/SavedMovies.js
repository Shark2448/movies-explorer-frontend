import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import { useFormValidation } from '../FormValidation.js/FormValidation';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ onOpen, movies, userMovies, deleteMovie, useFilterUserMovies, searchUserMovies, isLoading  }) {
    function handleMoviesList() {
        return (
            <>
            <MoviesCardList 
            movies={movies}
            userMovies={userMovies} 
            deleteMovie={deleteMovie}
            isLoading={isLoading} />
            </>
        )
    }

    return (
        <>
        <Header onOpen={onOpen}/>
        <main>
            <SearchForm useFilterUserMovies={useFilterUserMovies} userMovies={userMovies} useFormValidation={useFormValidation} searchUserMovie={searchUserMovies} />
            {isLoading ? <Preloader /> : handleMoviesList()}
        </main>
        <Footer />
        </>
    )
}

export default SavedMovies