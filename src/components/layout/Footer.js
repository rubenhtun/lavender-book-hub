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
            <h4>
              GET IN TOUCH{" "}
              <FontAwesomeIcon
                icon={faArrowUp}
                className="get-in-touch-arrow"
              />
            </h4>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
