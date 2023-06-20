import './SearchForm.css';
import { Route } from 'react-router-dom';
import { useFormValidation } from '../FormValidation.js/FormValidation';


function SearchForm({ searchMovies, searchUserMovies, useFilterMovies }) {
    const { values, handleChangeValues } = useFormValidation()

    let valueSearchMovies = localStorage.getItem('searchMovies');
    let filteredMovie = localStorage.getItem('filterMovie')

    function handleSubmitMovies(e) {
        e.preventDefault()
        if (e.target.closest('form').checkValidity()) {
            searchMovies(values)
            localStorage.setItem('searchMovies', values.search)
        } else {
            return
        }
    }

    function handleSubmitUserMovies(e) {
        e.preventDefault()
        if (e.target.closest('form').checkValidity()) {
            searchUserMovies(values)
            localStorage.setItem('searchUserMovies', values.search)
        } else {
            return
        }
    }

    return (
        <section className='searchForm'>
            <Route path='/movies'>
                <form className='searchForm__form' onSubmit={handleSubmitMovies} onChange={handleChangeValues} noValidate>
                    <input className='searchForm__input' placeholder='Фильм' defaultValue={valueSearchMovies || ''} required></input>
                    <button type='submit' className='searchForm__button page__link'></button>
                </form>
                <div className='searchForm__case'>
                    <label className='searchForm__switch' onChange={useFilterMovies} defaultChecked={filteredMovie === 'true' ? true : false}>
                        <input type='checkbox' className='searchForm__checkbox searchForm__checkbox-input'></input>
                        <span className='searchForm__slider searchForm__round'></span>
                    </label>
                    <p className='searchForm__text'>Короткометражки</p>
                </div>
            </Route>

            <Route path='/saved-movies'>
            <form className='searchForm__form' onSubmit={handleSubmitUserMovies} onChange={handleChangeValues} noValidate>
                    <input className='searchForm__input' placeholder='Фильм' required></input>
                    <button type='submit' className='searchForm__button page__link'></button>
                </form>
                <div className='searchForm__case'>
                    <label className='searchForm__switch' onChange={useFilterMovies}>
                        <input type='checkbox' className='searchForm__checkbox searchForm__checkbox-input'></input>
                        <span className='searchForm__slider searchForm__round'></span>
                    </label>
                    <p className='searchForm__text'>Короткометражки</p>
                </div>
            </Route>
        </section>
    )
}

export default SearchForm