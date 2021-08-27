import React, { useState } from "react";
import Header from "./components/Header/Header";
import Brief from "./components/Brief/Brief";
import ScrollTopBtn from "../../components/ScrollTopBtn";
import MakeOrder from "./components/MakeOrder/MakeOrder";
import Menu from "./components/Menu/Menu";
import "./Homepage.scss";
import Categories from "./components/Categories/Categories";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";

const Homepage = () => {
  const [isNotAtTop, setIsNotAtTop] = useState(false);

  const settingScrollTopBtn = () => {
    window.scrollY > 150 ? setIsNotAtTop(true) : setIsNotAtTop(false);
  };

  window.addEventListener("scroll", settingScrollTopBtn);

  return (
    <div className="homepageContainer">
      {isNotAtTop && <ScrollTopBtn />}
      <Header />
      <Brief />
      <MakeOrder />
      <Menu />
      <Categories />
      <Contact />
      <Gallery />
    </div>
  );
};

export default Homepage;
