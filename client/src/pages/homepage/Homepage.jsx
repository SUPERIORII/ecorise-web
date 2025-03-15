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
  // const result =
  //   "abraham".charAt(0).toUpperCase() + result.slice(1).toLowerCase();
  // // const value = result

  // console.log(result);
  
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
