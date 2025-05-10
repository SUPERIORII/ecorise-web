import React, { useEffect, useState } from "react";
import {
  HeroSection,
  Introduction,
  ProjectSection,
  OurTeam,
  HomeNews,
  Resources,
} from "../homepage/index";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";


const Home = () => {

  // fetch the data

  return (
    <div className="general-container">
      <HeroSection />
      <Introduction />
      <OurTeam />
      <ProjectSection />

      <HomeNews />
      <Resources />
    </div>
  );
};

export default Home;
