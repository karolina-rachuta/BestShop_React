import { Link as ScrollLink} from 'react-scroll';

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div>
          <span className="logo--footer"><ScrollLink to="header">BestShop</ScrollLink></span>
          <p className="footer__rights"> © 2019 BestShop LTD, All Rights Reserved</p>
        </div>
        <div className="footer__socials">
          <a className="twitter" href="http://twitter.com"></a>
          <a className="facebook" href="http://facebook.com"></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
