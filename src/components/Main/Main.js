import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import HeaderPromo from '../HeaderPromo/HeaderPromo';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';

function Main() {
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

export default Main