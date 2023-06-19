import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import MoreMovies from '../MoreMovies/MoreMovies';

function Movies({
    onOpen,
    movies,
    saveMovie,
    deleteMovie,
    searchMovies,
    useFormValidation,
    useFilterMovies,
    isLoading,
     }) {
        function handleMoviesList() {
            return (
                <>
                <MoviesCardList 
                movies={movies}
                saveMovie={saveMovie} 
                deleteMovie={deleteMovie}
                searchMovies={searchMovies}
                useFormValidation={useFormValidation}
                useFilterMovies={useFilterMovies}
                isLoading={isLoading} />
                </>
            )
        }
    
    return (
        <>
        <Header onOpen={onOpen}/>
        <main>
            <SearchForm useFilterMovies={useFilterMovies} useFormValidation={useFormValidation} searchMovies={searchMovies} />
            {isLoading ? <Preloader /> : handleMoviesList()}
            <MoreMovies />
        </main>
        <Footer />
        </>
    )
}

export default Movies