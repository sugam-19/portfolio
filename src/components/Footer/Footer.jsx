import React from "react";
import "./footer.css";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__content">
          <a href="#" className="footer__logo">
            Maheshwor Poudel
          </a>
          <p className="footer__tagline">Full Stack Developer | Building Digital Solutions</p>
        </div>

        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://github.com/sugam-19" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FiInstagram />
          </a>
        </div>

        <div className="footer__copyright">
          <small>© 2026 Maheshwor Poudel. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
