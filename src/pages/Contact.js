import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-image-wrapper">
        <img
          className="contact-image"
          src="/assets/images/contact.webp"
          alt="Contact us"
        />
      </div>
      <div className="contact-content">
        <h2 className="contact-title">Let's Get In Touch</h2>
        <p className="contact-description">
          Have questions, feedback, or just want to say hello? We’d love to hear
          from you!
        </p>
        <div className="contact-media">
          <a
            href="https://t.me/yourusername"
            className="contact-item telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 data-text="Telegram">Telegram</h4>
            <FontAwesomeIcon icon={faArrowUp} className="contact-arrow" />
          </a>

          <a
            href="mailto:your@email.com"
            className="contact-item email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 data-text="E-Mail">E-Mail</h4>
            <FontAwesomeIcon icon={faArrowUp} className="contact-arrow" />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            className="contact-item linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 data-text="Linkedin">Linkedin</h4>
            <FontAwesomeIcon icon={faArrowUp} className="contact-arrow" />
          </a>

          <a
            href="https://pinterest.com/yourusername"
            className="contact-item pinterest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 data-text="Pinterest">Pinterest</h4>
            <FontAwesomeIcon icon={faArrowUp} className="contact-arrow" />
          </a>

          <a
            href="https://behance.net/yourusername"
            className="contact-item behance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 data-text="Behance">Behance</h4>
            <FontAwesomeIcon icon={faArrowUp} className="contact-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
