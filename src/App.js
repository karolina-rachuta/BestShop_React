import { useState, useRef } from 'react';
import './App.scss';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  function handleHamburger() {
    setIsOpen(prev => !prev)
    if (navRef.current) {
      navRef.current.classList.toggle('open', !isOpen);
    }
    //isOpen ? navRef.current.style.display = 'none' : navRef.current.style.display = 'flex';
  }
  return (
    <div className="container">
      <header>
        <nav className='header__container'>
          <div className="header__box">
            <span className='logo'>BestShop</span>
            <div className='hamburger' onClick={handleHamburger}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className='header__menu' ref={navRef}>
            <ul>
              <li>WHY US</li>
              <li>BENEFITS</li>
              <li>PRICES</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        main
      </main>
      <footer>
        <div className='footer__container'>
          <div>
            <span className='logo--footer'>BestShop</span>
            <p className='footer__rights'>© 2019 BestShop LTD, All Rights Reserved</p>
          </div>
          <div className='footer__socials'>
            <a className="twitter" href="http://twitter.com"></a>
            <a className="facebook" href="http://facebook.com"></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
