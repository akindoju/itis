import React from "react";
import NavBar from "../NavBar/NavBar";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./Header.scss";

const Header = () => {
  // const NextArrow = (
  //   <svg
  //     version="1.1"
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="20"
  //     height="20"
  //     viewBox="0 0 20 20"
  //   >
  //     <title>Next</title>
  //     <path d="M11 10l-3.141-3.42c-0.268-0.27-0.268-0.707 0-0.978 0.268-0.27 0.701-0.27 0.969 0l3.83 3.908c0.268 0.271 0.268 0.709 0 0.979l-3.83 3.908c-0.267 0.272-0.701 0.27-0.969 0s-0.268-0.707 0-0.978l3.141-3.419z"></path>
  //   </svg>
  // );

  // const PrevArrow = (
  //   <svg
  //     version="1.1"
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="20"
  //     height="20"
  //     viewBox="0 0 20 20"
  //   >
  //     <title>Previous</title>
  //     <path d="M12.141 13.418c0.268 0.271 0.268 0.709 0 0.978s-0.701 0.272-0.969 0l-3.83-3.908c-0.268-0.27-0.268-0.707 0-0.979l3.83-3.908c0.267-0.27 0.701-0.27 0.969 0s0.268 0.709 0 0.978l-3.141 3.421 3.141 3.418z"></path>
  //   </svg>
  // );

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   nextArrow: NextArrow,
  //   prevArrow: PrevArrow,
  // };

  return (
    <div className="header" id="top">
      <NavBar />

      {/* <Slider {...settings}> */}
      <div className="header__content">
        <div className="header__content--main">
          <h1>Itis</h1>
          <h4>Food from your fingertips</h4>
        </div>

        <div className="header__content--sub">
          <button>Surprise Me!</button>
        </div>
      </div>

      {/* </Slider> */}
    </div>
  );
};

export default Header;
