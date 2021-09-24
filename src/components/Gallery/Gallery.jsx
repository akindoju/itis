import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      //remove event listener to avoid memory leak
      return window.removeEventListener("resize", handleWindowResize);
    }, []);

    //returning an object with width in it
    return { width };
  };

  const { width } = useViewport();

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
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="Slide 1"
          />
        </div>

        <div className="gallery__image">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
            alt="Slide 1"
          />
        </div>

        <div className="gallery__image">
          <img
            src="https://images.unsplash.com/photo-1596016083377-87b469f194d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="Slide 1"
          />
        </div>

        <div className="gallery__image">
          <img
            src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
            alt="Slide 1"
          />
        </div>

        <div className="gallery__image">
          <img
            src="https://images.unsplash.com/photo-1593478494483-2c8466077eb4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
            alt="Slide 1"
          />
        </div>

        <div className="gallery__image">
          <img
            src="https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="Slide 1"
          />
        </div>

        <div className="gallery__image">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="Slide 1"
          />
        </div>

        <div className="gallery__image">
          <img
            src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            alt="Slide 1"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
