import React from "react";
import {
  HeroSection,
  Introduction,
  ProjectSection,
  OurTeam,
  HomeNews,
  Resources,
} from "../homepage/index";

const Home = () => {
  return (
    <div>
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
