import { useState } from "react";

function Hamburger({ navRef }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleHamburger() {
    setIsOpen((prev) => !prev);
    if (navRef.current) {
      navRef.current.classList.toggle("open", !isOpen);
    }
  }

  return (
    <div className="hamburger" onClick={handleHamburger}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Hamburger;
