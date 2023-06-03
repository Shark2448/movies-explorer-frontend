import './SearchForm.css';
import { Route } from 'react-router-dom';


function SearchForm() {
    return (
        <section className='searchForm'>
            <Route path='/movies'>
                <div className='searchForm__store'>
                <form className='searchForm__form'>
                    <input className='searchForm__input' placeholder='Фильм'></input>
                    <button type='submit' className='searchForm__button'></button>
                </form>
                <div className='searchForm__case'>
                    <label className='searchForm__switch'>
                        <input type='checkbox' className='searchForm__checkbox searchForm__checkbox-input'></input>
                        <span className='searchForm__slider searchForm__round'></span>
                    </label>
                    <p className='searchForm__text'>Короткометражки</p>
                </div>
                </div>
            </Route>

            <Route path='/saved-movies'>
            <div className='searchForm__store'>
                <form className='searchForm__form'>
                    <input className='searchForm__input' placeholder='Фильм'></input>
                    <button type='submit' className='searchForm__button'></button>
                </form>
                <div className='searchForm__case'>
                    <label className='searchForm__switch'>
                        <input type='checkbox' className='searchForm__checkbox searchForm__checkbox-input'></input>
                        <span className='searchForm__slider searchForm__round'></span>
                    </label>
                    <p className='searchForm__text'>Короткометражки</p>
                </div>
                </div>
            </Route>
        </section>
    )
}

export default SearchForm