import './App.scss';

function App() {
  return (
    <div className="container">
      <header>
        <div className='header__container'>
          <span>BestShop</span>
          <nav>
            <ul>
              <li>WHY US</li>
              <li>BENEFITS</li>
              <li>PRICES</li>
              <li>CONTACT</li>
            </ul>
          </nav>
        </div>
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
