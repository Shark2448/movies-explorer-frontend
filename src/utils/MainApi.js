export const BASE_URL = "http://localhost:3001";

class MainApi {
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

    register (email, password, name) {
        return fetch(`${BASE_URL}/signup`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, name }),
        }).then(this._handleRes);
    }

    authoriz(email, password) {
        return fetch(`${BASE_URL}/signin`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }).then(this._handleRes);
    }

    changeUserInfo(data) {
        return fetch(this._url + "/users/me", {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({ name: data.name, email: data.email }),
        }).then(this._handleRes);
    }

    getUserContent() {
        return fetch(`${BASE_URL}/users/me`, {
            headers: this._headers,
        }).then(this._handleRes);
    }

    getUserMovies() {
        return fetch(this._url + `/movies`, {
            headers: this._headers,
        }).then(this._handleRes);
    }

    deleteMovie(movieId) {
        return fetch(this._url + `/movies/` + movieId, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._handleRes);
    }

    likeMovie(movie) {
        return fetch(this._url + `/movies`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
               country: movie.country,
               director: movie.director,
               duration: movie.duration,
               year: movie.year,
               description: movie.description,
               image: movie.image.url,
               trailerLink: movie.trailerLink,
               thumbnail: movie.image.thumbnail.url,
               movieId: movie.id,
               nameRU: movie.nameRU,
               nameEN: movie.nameEN, 
            }),
        }).then(this._handleRes);
    }

    changeLikeMovieStatus(cardId, isLiked) {
        if (isLiked) {
            return fetch(this._url + `/movies/` + cardId, {
                method: "DELETE",
                headers: this._headers,
            }).then(this._handleRes);
        } else {
            return fetch(this._url + `/movies/` + cardId, {
                method: "PUT",
                headers: this._headers,
            }).then(this._handleRes);
        }
    }

    updateHeaders(token) {
        this._headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }

    deleteHeaders() {
        this._headers = {
            Authorization: `Bearer `,
            "Content-Type": "application/json"
        }
    }
}

const token = localStorage.getItem('token');

export const mainApi = new MainApi({
    url: "http://localhost:3001",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    }
})