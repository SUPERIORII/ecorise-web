import React, { useRef, useState } from "react";
import "../aboutUs/AboutUs.css";
import { FaLowVision } from "react-icons/fa";
import Card from "./Card";
import { organization, profilePictures } from "../../sources";
import Title from "../../components/Title";
import Button from "../../components/utils/Button";
import Wrapper from "../../components/styles/AboutUs";

const AboutUs = () => {
  const [teamMembers, setTeamMembers] = useState(profilePictures);
  const [organizations, setOrganizations] = useState(organization);
  // useRef

  return (
    <Wrapper>
      <section className="about-us-section">
        <aside className="aboutUsInfo">
          <h1>about us</h1>
          <span>
            EcoRise Global Initiative focuses on enhancing the environment of a
            nation and living condition of its people
          </span>
        </aside>

        <aside className="aboutUsImg">
          <div className="img-wrapper">
            <img
              src="../src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg"
              alt=""
            />
          </div>
        </aside>
      </section>

      <section className="ecorise-objectives">
        <a href="#mission-section" className="objective">
          <div className="icon-box">
            <FaLowVision className="objective-icon" />
          </div>
          <h1>Our Mission</h1>
        </a>

        <a href="#purpose-section" className="objective">
          <div className="icon-box">
            <FaLowVision className="objective-icon" />
          </div>
          <h1>Our Purpose</h1>
        </a>

        <div className="objective">
          <div className="icon-box">
            <FaLowVision className="objective-icon" />
          </div>
          <h1>Our Purpose</h1>
        </div>
      </section>

      <section className="mission-section" id="mission-section">
        <aside className="missionInfo">
          <div className="objective-box">
            <h1>our mission</h1>

            <FaLowVision className="icon" />
          </div>
          <span>
            EcoRise Global Initiative focuses on enhancing the environment of a
            nation and living condition of its people
          </span>
        </aside>

        <aside className="missionImg">
          <div className="img-wrapper">
            <img
              src="../src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg"
              alt=""
            />
          </div>
        </aside>
      </section>

      <section className="purpose-section" id="purpose-section">
        <aside className="missionInfo">
          <div className="objective-box">
            <h1>our purpose</h1>

            <FaLowVision className="icon" />
          </div>
          <span>
            EcoRise Global Initiative focuses on enhancing the environment of a
            nation and living condition of its people
          </span>
        </aside>

        <aside className="missionImg">
          <div className="img-wrapper">
            <img
              src="../src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg"
              alt=""
            />
          </div>
        </aside>
      </section>

      <section className="team-members">
        <Title title="Our Team" />
        <Card state={teamMembers} />

        <Button />
      </section>

      <section className="team-members">
        <Title title="Our partners" />
        <Card state={organizations} />
      </section>
    </Wrapper>
  );
};

export default AboutUs;
