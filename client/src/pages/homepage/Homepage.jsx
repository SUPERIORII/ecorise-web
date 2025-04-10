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
    <>
      <HeroSection />
      <Introduction />
      <ProjectSection />
      <OurTeam />
      <HomeNews />
      <Resources />
    </>
  );
};

export default Home;
