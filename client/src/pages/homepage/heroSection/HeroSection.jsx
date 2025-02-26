import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import { multipleImages } from "../../../sources";

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const HeroSection = () => {
  const [silderImg, setSliderImg] = useState(multipleImages);
  const [currentItem, setCurrentItem] = useState(0);


  // auto play function

  useEffect(()=>{
    const autoplay = setInterval(()=>{
      nextBgSlide()
    }, [5000])

    return ()=>{
      clearInterval(autoplay)
    }
  }, [currentItem])

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
    <article className="image-slider-wrapper">
      {silderImg.map((data, bgImageIndex) => {
        const { id, image } = data;
        return (
          <div
            className="slides"
            key={id}
            style={{
              transform: `translateX(${100 * (bgImageIndex - currentItem)}%)`,
            }}
          >
            <img className="img" src={image} alt="image" />
          </div>
        );
      })}

      <section className="image-overlay">
        <div className="overlay-info">
          <h1>Empowering Communities</h1>
          <h4>for a sustainable future</h4>
          <p>
            Empowering Communities to build sustainable futures through
            environmental stewardship, education and innovative solutions.
          </p>
        </div>

        <div className="overlay-btn">
          <button className="hero-donate-btn">Donate Now</button>
          <button className="getinvolve-btn"> Get Involved</button>
        </div>

        <div className="slides-btn">
          <FaChevronCircleLeft
            className={currentItem === 0 ? "slide-left hide" : "slide-left"}
            onClick={prevBgSlide}
          />
          <FaChevronCircleRight
            className={
              currentItem === silderImg.length - 1
                ? "slide-right hide"
                : "slide-right"
            }
            onClick={nextBgSlide}
          />
        </div>
      </section>
    </article>
  );
};

export default HeroSection;
