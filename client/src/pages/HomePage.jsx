import React from "react";
import HeroSection from "../components/HeroSection";
import Title from "../components/Title";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/homepage.css";
import OurTeam from "../components/OurTeam";
import ProjectSection from "../components/ProjectSection";
import HomeNews from "../components/HomeNews";
import Resources from "../components/Resources";
import useAuthStore from "../Authentications/store";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      {/* Introduction section */}
      <section className="introduction-section">
        <Title title="Welcome to ecorise" />
        {/* Introduction section */}
        <section className="intro-card ">
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
              <button className="btn">Learn More</button>
              <Link to="/video">
                <div className="how-it-work-play-icon">
                  <FaPlay className="play-btn" />
                </div>
              </Link>
              <span className="how-it-work">How We works</span>
            </div>
          </div>
        </section>
        {/* Our team section */}
        <OurTeam />
        {/* Latest Project section */}
        <ProjectSection />
        {/* Latest news section */}
        <HomeNews />
        <Resources />
      </section>
    </div>
  );
};

export default HomePage;
