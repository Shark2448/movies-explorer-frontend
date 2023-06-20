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
    userMovies,
    saveMovie,
    deleteMovie,
    searchMovies,
    useFilterMovies,
    isLoading,
     }) {
        function handleMoviesList() {
            return (
                <>
                <MoviesCardList 
                movies={movies}
                userMovies={userMovies}
                saveMovie={saveMovie} 
                deleteMovie={deleteMovie}
                searchMovies={searchMovies}
                useFilterMovies={useFilterMovies}
                isLoading={isLoading} />
                </>
            )
        }
    
    return (
        <>
        <Header onOpen={onOpen}/>
        <main>
            <SearchForm useFilterMovies={useFilterMovies} searchMovies={searchMovies} />
            {isLoading ? <Preloader /> : handleMoviesList()}
            <MoreMovies movies={movies}/>
        </main>
        <Footer />
        </>
    )
}

export default Movies