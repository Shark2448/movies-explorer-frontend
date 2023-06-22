export const filteredMoviesFalse = false;
export const filteredMoviesTrue = true;
export const firstLocalSearch = true; 

export let localMovies = JSON.parse(localStorage.getItem('movies'));
export let moviesList = JSON.parse(localStorage.getItem('movieList'));
export let login = localStorage.getItem('loggedIn');
export let localSearch = localStorage.getItem('localSearch');
export let localSearching = localStorage.getItem('localSearching')
export let valueSearchMovies = localStorage.getItem('searchMovies');
export let valueSearchUserMovies = localStorage.getItem('searchUserMovies');
export let filterMovie = localStorage.getItem('filterMovie');
export let filteredMovie = localStorage.getItem('filterMovie')