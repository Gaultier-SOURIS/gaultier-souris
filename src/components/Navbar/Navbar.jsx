import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#top" className="navbar__brand">
          <img src={logo} alt="logo" className="navbar__logo" />
          <div className="navbar__identity">
            <span className="navbar__title">Gaultier Souris</span>
            <span className="navbar__subtitle">Developpeur Web</span>
          </div>
        </a>
        <nav
          className={
            isMenuOpen ? "navbar__menu navbar__menu--open" : "navbar__menu"
          }
          aria-label="Menu principal"
        >
          <ul>
            <li>
              <a href="#accueil" className="navbar__link" onClick={closeMenu}>
                accueil
              </a>
            </li>
            <li>
              <a href="#services" className="navbar__link" onClick={closeMenu}>
                services
              </a>
            </li>
            <li>
              <a
                href="#realisations"
                className="navbar__link"
                onClick={closeMenu}
              >
                réalisations
              </a>
            </li>
            <li>
              <a href="#apropos" className="navbar__link" onClick={closeMenu}>
                a propos
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className="navbar__link link-contact"
                onClick={closeMenu}
              >
                contactez moi
              </a>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className="navbar__toggle"
          aria-label="ouvrir le menu de navigation"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
