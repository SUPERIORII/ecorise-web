import React from "react";
import "./Introduction.css";
import { FaPlay } from "react-icons/fa";
import Title from "../../../components/utils/title/Title";


const Introduction = () => {
  return (
    <div className="ergi-intro-container">
      <section className="welcome-title">
        <Title title="WELCOME TO ECORISE GLOBAL INITIATIVES" />
      </section>

      <section className="intro-wrapper">
        <div className="intro-img-holder">
          <img
            className="intro-img"
            src="./src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg"
            alt="image"
          />
        </div>

        <div className="intro-info">
          <h3 className="info">
            A thriving, sustainable world where communities and ecosystems
            prosper in harmony
          </h3>
          <h4>We are the best eco fighters</h4>

          <p>
            Empowering communities to build sustainable futures through
            environmental stewardship, education, and innovative solutions.
            <br /> <br />
            Making all communities within the environment better with good
            hygienic precaution for safty and good health.
          </p>

          <div className="intro-btn">
            <button className="learn-more-btn">Learn More</button>
            <div className="how-it-work-play-icon">
              <FaPlay className="play-btn" />
            </div>
            <span className="how-it-work">How We works</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
