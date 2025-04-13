import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Brand & Copyright */}
        <div className="footer-brand">
          <h3>Lavender Book Hub</h3>
          <p>
            &copy; {new Date().getFullYear()} Lavender Book Hub. All rights
            reserved.
          </p>
        </div>

        {/* Right Section: Get In Touch */}
        <div className="get-in-touch">
          <Link to="/contact">
            <h4 data-text="GET IN TOUCH">GET IN TOUCH</h4>
            <FontAwesomeIcon icon={faArrowUp} className="get-in-touch-arrow" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
