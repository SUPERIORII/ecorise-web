import React, { useState } from "react";
import Title from "../../../components/utils/title/Title";
import "../ourteam/OurTeam.css";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { profilePictures } from "../../../sources";

const OurTeam = () => {
  const [members, setMembers] = useState(profilePictures);
  return (
    <div>
      <Title title="our team" />
      <p className="team-title">
        meet our <span>expert team</span>
      </p>

      <div className="our-team-container">
        {members && members.length > 0 ? (
          members.map((member) => {
            const {id, name, img, rank} = member;
            return (
              <div className="our-team-preview" key={id}>
                <div className="member-wrapper">
                  <img
                    src={img}
                    alt={name}
                  />

                  <div className="social-control-container">
                    <div className="controls">
                      <div className="facebook-btn">
                        <FaFacebook className="fackbook-icon icons" />
                      </div>

                      <div className="whatsapp-btn">
                        <FaWhatsapp className="whatsapp-icon icons" />
                      </div>

                      <div className="facebook-btn">
                        <FaInstagram className="fackbook-icon icons" />
                      </div>

                      <div className="instagram-btn">
                        <FaLinkedin className="instagram-icon icons" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="member-info">
                  <h4>{name}</h4>
                  <span>{rank}</span>
                </div>
              </div>
            );
          })
        ) : (
          <div>"No Member"</div>
        )}
      </div>
    </div>
  );
};

export default OurTeam;
