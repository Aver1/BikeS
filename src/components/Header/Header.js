import logo from '../../images/MyBiKE.svg'

function Header() {

  return (
    <header className="header">
      <nav className="header__navigation">
        <img className="header__logo" src={logo} alt="Logo"/>
        <div className="header__elem">
          <a href="tel:1235555555"><div className="header__phone"></div></a>
          <button className="header__menu"><div className="header__menu-style"></div></button>
        </div>
      </nav>
    </header>
  );
}

export default Header;