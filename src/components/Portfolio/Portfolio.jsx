import React from "react";
import "./portfolio.css";
import portfolioImg from "../../assets/portfolio.png";

const data = [
  {
    id: 1,
    image: "https://kidncode.com/assets/knc-logo-D8Qrlh3n.png",
    title: "Kidncode",
    description: "Educational platform for coding and programming",
    demo: "https://kidncode.com/",
  },
  {
    id: 2,
    image: "https://concertoanalytics.com/wp-content/uploads/2020/10/card_1_model.jpg",
    title: "Concerto Analytics",
    description: "Data analytics and business intelligence platform",
    demo: "https://concertoanalytics.com/",
  },
  {
    id: 3,
    image: portfolioImg,
    title: "My Portfolio",
    description: "Personal portfolio website",
    demo: "https://maheshwor-poudel.com.np/",
  },
];

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {data.map(({ id, image, title, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
