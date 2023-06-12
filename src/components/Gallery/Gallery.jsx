import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import glr2 from "../../Images/glr-2.webp";
import glr3 from "../../Images/glr-3.webp";
import glr4 from "../../Images/glr-4.webp";
import glr5 from "../../Images/glr-5.webp";
import glr6 from "../../Images/glr-6.webp";
import glr7 from "../../Images/glr-7.webp";
import glr8 from "../../Images/glr-8.webp";
import glr9 from "../../Images/glr-9.webp";

import "./Gallery.scss";

const Gallery = () => {
  const NextArrow = (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <title>Next</title>
      <path d="M11 10l-3.141-3.42c-0.268-0.27-0.268-0.707 0-0.978 0.268-0.27 0.701-0.27 0.969 0l3.83 3.908c0.268 0.271 0.268 0.709 0 0.979l-3.83 3.908c-0.267 0.272-0.701 0.27-0.969 0s-0.268-0.707 0-0.978l3.141-3.419z"></path>
    </svg>
  );

  const PrevArrow = (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <title>Previous</title>
      <path d="M12.141 13.418c0.268 0.271 0.268 0.709 0 0.978s-0.701 0.272-0.969 0l-3.83-3.908c-0.268-0.27-0.268-0.707 0-0.979l3.83-3.908c0.267-0.27 0.701-0.27 0.969 0s0.268 0.709 0 0.978l-3.141 3.421 3.141 3.418z"></path>
    </svg>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: NextArrow,
    prevArrow: PrevArrow,
  };

  const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);

      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return { width };
  };

  const { width } = useViewport();

  useEffect(() => {
    console.log({ width });
  }, [width]);

  const setGalleryWidth = (width) => {
    if (width < 901) {
      settings.slidesToShow = 3;
    }

    if (width < 601) {
      settings.slidesToShow = 2;
    }

    if (width < 301) {
      settings.slidesToShow = 1;
    }
  };

  setGalleryWidth(width);

  return (
    <div className="gallery">
      <h1 className="gallery__heading">Gallery</h1>

      <Slider {...settings}>
        <div className="gallery__image">
          <img src={glr2} alt="Slide 1" />
        </div>

        <div className="gallery__image">
          <img src={glr8} alt="Slide 2" />
        </div>

        <div className="gallery__image">
          <img src={glr4} alt="Slide 3" />
        </div>

        <div className="gallery__image">
          <img src={glr5} alt="Slide 4" />
        </div>

        <div className="gallery__image">
          <img src={glr9} alt="Slide 5" />
        </div>

        <div className="gallery__image">
          <img src={glr6} alt="Slide 6" />
        </div>

        <div className="gallery__image">
          <img src={glr7} alt="Slide 7" />
        </div>

        <div className="gallery__image">
          <img src={glr3} alt="Slide 8" />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
