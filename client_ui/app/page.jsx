import React from "react";
import { Navbar, Carousel, SectionTitle } from "@/components/customUi";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import ClientProvider from "@/components/ClientProvider";
import { Team, Project, News, StudentProject } from "@/components/Landing";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="egi-home">
      <Navbar />
      {/* CAROUSEL */}
      <div className="egi-carousel w-full relative overflow-hidden h-96 text-white">
        <Carousel />
      </div>

      {/* Introduction section */}
      <section className="p-6">
        <SectionTitle Title="Welcome to Ecorise" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="intro-img-holder h-80 border-2 p-2 rounded-lg group relative">
            <img
              className="w-full h-full rounded-lg group-hover:shadow-xl transition-shadow duration-500"
              src="./images/03a6acdf091c4972ac8bcc3e65d010de.jpg"
              alt="image"
            />
          </div>

          <div className="intro-info">
            <h3 className="max-w-2xl font-bold text-4-l tracking-tight sm:text-3xl">
              A thriving, sustainable world where communities and ecosystems
              prosper in harmony
            </h3>
            <h4 className="text-green-800 mt-10 font-medium">
              We are the best eco fighters
            </h4>

            <p>
              Empowering communities to build sustainable futures through
              environmental stewardship, education, and innovative solutions.
              <br /> <br />
              Making all communities within the environment better with good
              hygienic precaution for safty and good health.
            </p>

            <div className="flex gap-14 mt-6">
              <button className="btn">Learn More</button>
              <Link href="/video">
                <div className="flex items-center bg-blue-800 gap-2 p-2 rounded-lg text-white">
                  <FaPlay className="play-btn" />
                  <span className="how-it-work">How We works</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* OUR Project */}
        <SectionTitle Title="Student Innovative Projects" />
        <Card className="px-5">
          <StudentProject />
          <Button className="">View all Projects</Button>
        </Card>

        {/* OUR TEAM */}
        <SectionTitle Title="OUR TEAM" />
        <ClientProvider>
          <Team />
        </ClientProvider>

        {/* OUR Project */}
        <SectionTitle Title="LATEST NEWS" />
        <Card>
          <News />
        </Card>

        {/* student project */}
        <SectionTitle Title="LATEST NEWS" />
      </section>
    </div>
  );
};

export default HomePage;
