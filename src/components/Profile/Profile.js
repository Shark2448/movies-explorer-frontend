import Header from '../Header/Header';
import './Profile.css';

function Profile({ onOpen }) {
    return (
        <>
            <Header onOpen={onOpen}/>
            <main>
                <section className='profile'>
                    <h3 className='profile__title'>Привет, Виталий!</h3>
                    <form className='profile__form'>
                        <div className='profile__case-name'>
                            <p className='profile__name-title'>Имя</p>
                            <input className='profile__name' placeholder='Виталий'></input>
                        </div>
                        <div className='profile__case-email'>
                            <p className='profile__name-title'>E-mail</p>
                            <input className='profile__name' placeholder='pochta@yandex.ru'></input>
                        </div>
                        <button type='submit' className='profile__edit-btn page__link'>Редактировать</button>
                        <p className='profile__logoff-btn page__link'>Выйти из аккаунта</p>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Profile