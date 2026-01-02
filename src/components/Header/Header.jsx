import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import sugam from "../../assets/sugam.jpeg";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h5 className="text-light">Hello I'm</h5>
          <h1 className="gradient-text">Maheshwor Poudel</h1>
          <h5 className="text-light">Full Stack Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={sugam} alt="Maheshwor Poudel" />
          </div>

          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
