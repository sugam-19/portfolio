import React from "react";
import "./about.css";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Multiple Projects</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Kidncode, Concerto & More</small>
            </article>
          </div>
          <p>
            I am a skilled Full Stack Developer with 2 years of hands-on experience
            in building scalable web applications using modern technologies. My expertise
            spans across React.js for creating dynamic user interfaces, Node.js and Express.js
            for robust backend services, and SQL for efficient database management. I have
            practical experience deploying and managing applications on cloud platforms
            including AWS and GCP. Throughout my career, I've contributed to notable projects
            like Kidncode and Concerto, where I delivered high-quality, innovative solutions.
            I'm passionate about writing clean, maintainable code and staying current with
            the latest industry trends to create exceptional digital experiences.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
