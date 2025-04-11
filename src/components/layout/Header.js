import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <NavLink to="/" className="logo-link">
          <div className="logo-container">
            <img
              className="logo-image"
              src="lavender-flower.png"
              alt="Lavender Logo"
            />
            <h1 className="logo-text">.Lavender</h1>
          </div>
        </NavLink>

        {/* Book Hub */}
        <div className="book-hub">
          <FontAwesomeIcon icon={faBookOpen} className="book-icon" />
          <h2>Book Hub</h2>
        </div>

        {/* Hamburger */}
        <div
          className={`menu-bar ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Fullscreen Modal Nav */}
      {isMenuOpen && (
        <div className="modal-nav">
          <ul className="modal-nav-links">
            <li>
              <button className="close-btn" onClick={toggleMenu}>
                X
              </button>
            </li>
            <li>
              <NavLink to="/" onClick={toggleMenu}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleMenu}>
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" onClick={toggleMenu}>
                BOOKS
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleMenu}>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
