import React, { useEffect } from "react";
import {
  HeroSection,
  Introduction,
  ProjectSection,
  OurTeam,
  HomeNews,
  Resources,
} from "../homepage/index";

const Home = () => {
  const handleScroll = () => {
    console.log("HTML Height: ", document.documentElement.scrollHeight);
    console.log("HTML width: ", document.documentElement.scrollWidth);
    console.log("top: ", document.documentElement.scrollTop);
    console.log("Window Height: ", window.innerHeight);
    console.log("window Width: ", window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("cancelled");
    };
  });

  return (
    <div className="general-container">
      <HeroSection />
      <Introduction />
      <ProjectSection />
      <OurTeam />
      <HomeNews />
      <Resources />
    </div>
  );
};

export default Home;
