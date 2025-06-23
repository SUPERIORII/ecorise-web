import React, { useEffect, useState } from "react";
import { multipleImages } from "../sources";

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const HeroSection = () => {
  const [silderImg, setSliderImg] = useState(multipleImages);
  const [currentItem, setCurrentItem] = useState(0);

  // auto play function
  useEffect(() => {
    const autoplay = setInterval(() => {
      nextBgSlide();
    }, [5000]);

    return () => {
      clearInterval(autoplay);
    };
  }, [currentItem]);

  // next bg slide function
  const nextBgSlide = () => {
    setCurrentItem((prev) => {
      const currentBgIndex = prev + 1;

      return checkSlideIndex(currentBgIndex);
    });
  };

  // previous bg slide function
  const prevBgSlide = () => {
    setCurrentItem((prev) => {
      const currentBgIndex = prev - 1;

      console.log(currentItem);
      return checkSlideIndex(currentBgIndex);
    });
  };

  const checkSlideIndex = (number) => {
    if (number > silderImg.length - 1) {
      return 0;
    }

    if (number < 0) {
      return silderImg.length - 1;
    }

    return number;
  };

  return (
    <article className="image-slider-wrapper w-full relative overflow-hidden h-96">
      {silderImg.map((data, bgImageIndex) => {
        const { id, image } = data;
        return (
          <div
            className="absolute h-full w-full top-0 left-0 transition ease-in duration-600"
            key={id}
            style={{
              transform: `translateX(${100 * (bgImageIndex - currentItem)}%)`,
              transition: "transform 0.6s ease-in",
            }}
          >
            <img
              className="w-full h-full object-cover object-right-top"
              src={image}
              alt="image"
            />
          </div>
        );
      })}

      <section
        className="absolute top-0 bottom-0 left-0 right-0 py-12 px-11"
        style={{
          background: "rgba(0,0,0,.7",
          transition: "transform 0.6s ease-in",
        }}
      >
        <div className="overlay-info w-full max-w-[500]">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Empowering Communities
          </h1>
          <h4 className="capitalize text-xl md:text-2xl lg:text-3xl font-semibold">
            for a sustainable future
          </h4>
          <p className="text-sm md:text-base pt-3 flex flex-wrap">
            Empowering Communities to build sustainable futures through
            environmental stewardship, education and innovative solutions.
          </p>
        </div>

        <div className="mt-20 flex gap-4">
          <button className="btn btn-accent">Donate Now</button>
          <button className="btn"> Get Involved</button>
        </div>

        <div className="slides-btn">
          <FaChevronCircleLeft
            className={`w-10 h-10 absolute cursor-pointer opacity-50 top-[50%] left-[1%] hover:opacity-100 transition-opacity focus-within:opacity-100 ${
              currentItem === 0 && "hidden"
            }`}
            // {currentItem === 0 ? "slide-left hide" : "slide-left"}
            onClick={prevBgSlide}
          />
          <FaChevronCircleRight
            className={`w-10 h-10 absolute cursor-pointer opacity-50 top-[50%] right-[1%] hover:opacity-100 transition-opacity focus-within:opacity-100  ${
              silderImg.length > 3 && "hidden"
            }`}
            onClick={nextBgSlide}
          />
        </div>
      </section>
    </article>
  );
};

export default HeroSection;
