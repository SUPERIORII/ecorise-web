import React, { useState } from "react";
import Title from "../../../components/utils/title/Title";
import "../ourteam/OurTeam.css";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import customUrl from "../../../basedUrl";

const OurTeam = () => {
  // fetching the user
  const { isError, isLoading, data } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const response = await customUrl.get("/api/members/latest");
      return response.data;
    },
  });


  return (
    <div>
      <Title title="our team" />
      <p className="team-title">
        meet our <span>expert team</span>
      </p>

      <div className="our-team-container">
        {isError ? (
          "Error Ocurr fetching members. Please try again"
        ) : isLoading ? (
          "Loading our team please be patient..."
        ) : data && data.length > 0 ? (
          data.map((member) => {
            const {
              sociallink_id,
              username,
              user_profile,
              facebook_Url,
              instagram_Url,
              whatsapp_Url,
              rank,
            } = member;
            return (
              <div className="our-team-preview" key={sociallink_id}>
                <div className="member-wrapper">
                  <img
                    src="/src/assets/03a6acdf091c4972ac8bcc3e65d010de.jpg"
                    alt={username}
                  />

                </div>

                <div className="member-info">
                  <h4>{username}</h4>
                  <span>Rank</span>
                </div>
                  <div className="social-control-container">
                    <div className="controls">
                      <NavLink to={facebook_Url} className="facebook-btn">
                        <FaFacebook className="fackbook-icon icons" />
                      </NavLink>

                      <NavLink to={whatsapp_Url} className="whatsapp-btn">
                        <FaWhatsapp className="whatsapp-icon icons" />
                      </NavLink>

                      <NavLink to={instagram_Url} className="instagram-btn">
                        <FaLinkedin className="instagram-icon icons" />
                      </NavLink>
                    </div>
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
