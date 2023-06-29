import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({
    onOpen,
    movies,
    userMovies,
    handleSaveMovie,
    handleDeleteMovie,
    searchMovies,
    useFilterMovies,
    isLoading,
    searchError,
    notFoundError,
     }) {
        function handleMoviesList() {
            return (
                <>
                <MoviesCardList 
                movies={movies}
                userMovies={userMovies}
                handleSaveMovie={handleSaveMovie} 
                handleDeleteMovie={handleDeleteMovie}
                searchMovies={searchMovies}
                useFilterMovies={useFilterMovies}
                isLoading={isLoading}
                searchError={searchError}
                notFoundError={notFoundError} />
                </>
            )
        }
    
    return (
        <>
        <Header onOpen={onOpen}/>
        <main>
            <SearchForm useFilterMovies={useFilterMovies} searchMovies={searchMovies} />
            {isLoading ? <Preloader /> : handleMoviesList()}
        </main>
        <Footer />
        </>
    )
}

export default Movies