import { useRef } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./header/Hamburger";
import Menu from "./header/Menu";

function Header() {
  const navRef = useRef(null);

  return (
    <header id="header">
      <nav className="header__container">
        <div className="header__box">
          <span className="logo"><Link to="/">BestShop</Link></span>
          <Hamburger navRef={navRef} />
        </div>
        <Menu navRef={navRef} />
      </nav>
    </header>
  );
}

export default Header;
