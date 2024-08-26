import Header from "./Header";
import Hero from "./Hero";
import WhyUs from "./WhyUs";
import Benefits from "./Benefits";
import Prices from "./Prices";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <WhyUs />
      <Benefits />
      <Prices />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
