class MoviesApi {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _handleRes = (res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies() {
        return fetch(this._url, {
            headers: this._headers,
        }).then(this._handleRes);
    }

    likeMovie(movieId) {
        return fetch(this._url + `/movies/` + movieId + "/likes", {
            method: "PUT",
            headers: this._headers,
        }).then(this._handleRes);
    }

    dislikeMovie(movieId) {
        return fetch(this._url + `/movies/` + movieId + "/likes", {
            method: "DELETE",
            headers: this._headers,
        }).then(this._handleRes);
    }

    deleteMovie(movieId) {
        return fetch(this._url + `/movies/` + movieId, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._handleRes);
    }

    changeLikeMovieStatus(movieId, isLiked) {
        if (isLiked) {
            return fetch(this._url + `movies` + movieId + "/likes", {
                method: "DELETE",
                headers: this._headers,
            }).then(this._handleRes);
        } else {
            return fetch(this._url + `/movies/` + movieId + "/likes", {
                method: "PUT",
                headers: this._headers,
            }).then(this._handleRes);
        }
    }
}

export const moviesApi = new MoviesApi({
    url: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});