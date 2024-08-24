import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Benefits from './components/Benefits';
import Prices from './components/Prices';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="container">
            <Header />
            <Hero />
            <WhyUs />
            <Benefits />
            <Prices />
            <Contact />
            <Footer />
          </div>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
