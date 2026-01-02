import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <>
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Wireframing</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>User Interface (UI) Design</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Mobile App Design</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Web Design</p>
              </li>
            </ul>
          </article>
          {/* End of UI/UX */}

          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Website Development</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Custom Web Application Development</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Content Management Systems (CMS)</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Web Design</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Responsive Web Design</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>API Development</p>
              </li>
            </ul>
          </article>
          {/* End of Web Development */}
        </div>
      </section>
    </>
  );
};

export default Services;
