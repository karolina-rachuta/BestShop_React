import Header from './Header';
import Hero from './Hero';
import WhyUs from './WhyUs';
import Benefits from './Benefits';
import Prices from './Prices';
import Contact from './Contact';
import Footer from './Footer';
import Calculator from './Calculator';

function Home() {
    return (
        <div className="container">
            <Header />
            <Hero />
            <WhyUs />
            <Benefits />
            <Prices />
            <Calculator />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
