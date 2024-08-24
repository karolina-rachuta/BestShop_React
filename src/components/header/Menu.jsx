import { Link as ScrollLink} from 'react-scroll';

function Menu({navRef}) {
  return (
    <div className="header__menu" ref={navRef}>
      <ul>
        <li><ScrollLink to="whyus">WHY US</ScrollLink></li>
        <li><ScrollLink to="benefits">BENEFITS</ScrollLink></li>
        <li><ScrollLink to="prices">PRICES</ScrollLink></li>
        <li><ScrollLink to="contact">CONTACT</ScrollLink></li>
      </ul>
    </div>
  );
}

export default Menu;
