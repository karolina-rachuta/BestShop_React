function Menu({navRef}) {
  return (
    <div className="header__menu" ref={navRef}>
      <ul>
        <li>WHY US</li>
        <li>BENEFITS</li>
        <li>PRICES</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
}

export default Menu;
