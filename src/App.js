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
            <span className='logo logo--footer'>BestShop</span>
            <p>© 2019 BestShop LTD, All Rights Reserved</p>
          </div>
          <div>
            <a href="http://twitter.com"><img src="../src/assets/Twitter.svg" alt="Twitter Icon"/></a>
            <a href="http://facebook.com"><img src="../src/assets/Facebook.svg" alt="Facebook Icon"/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
