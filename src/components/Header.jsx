import { useRef } from "react";
import Hamburger from "./header/Hamburger";
import Menu from "./header/Menu";

function Header() {
  const navRef = useRef(null);

  return (
    <header>
      <nav className="header__container">
        <div className="header__box">
          <span className="logo">BestShop</span>
          <Hamburger navRef={navRef} />
        </div>
        <Menu navRef={navRef} />
      </nav>
    </header>
  );
}

export default Header;
