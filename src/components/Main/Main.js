import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderPromo from '../HeaderPromo/HeaderPromo';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';

function Main({ loggedIn, onOpen }) {
    if (loggedIn) {
        return(
            <>
            <Header onOpen={onOpen}/>
            <main className='content'>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
            </>
        )
    } else {
    return (
        <>
        <HeaderPromo />
        <main className='content'>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
        </main>
        <Footer />
        </>
    )
    }
}

export default Main