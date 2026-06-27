import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container container">
        <a href="#" className="navbar__brand">
          <img src={logo} alt="Logo" className="navbar__logo" />
          <div className="navbar__identity">
            <span className="navbar__title">Gaultier Souris</span>
            <span className="navbar__subtitle">Developpeur Web</span>
          </div>
        </a>
        <button
          type="button"
          className="navbar__toggle"
          aria-label="ouvrir le menu de navigation"
        >
          <RxHamburgerMenu />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
