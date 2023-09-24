import React from "react";
import "./navbar.css";
import { links } from "../../data";
import { Link } from "react-router-dom";

const NavBar = ({ children }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <>
      <div className="navbar__container">
        <div className="navbar__left">
          <Link to={"/"}>
            <span className="navbar__logo-one">get</span>
            <span className="navbar__logo-two">linked</span>
          </Link>
        </div>
        <div className="navbar__right">
          <div className="navbar__links">
            {links.map((link) => (
              <Link to={link.link} key={link.id} className="navbar__links-link">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="navbar__button">
            <Link to={"/register"}>
              <button>Register</button>
            </Link>
          </div>
        </div>
        <div className="mobile__menu">
          <span className="hamburger__icon" onClick={() => setShowMenu(true)}></span>
        </div>
      </div>
      {showMenu ? (
        <div className="mobile__menu-menu">
          <div className="close__button">
            <span className="close__icon" onClick={() => setShowMenu(false)}></span>
          </div>
          <div className="navbar__links">
            {links.map((link) => (
              <Link to={link.link} key={link.id} className="navbar__links-link">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="navbar__button">
            <Link to={"/register"}>
              <button>Register</button>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
      {children}
    </>
  );
};

export default NavBar;
