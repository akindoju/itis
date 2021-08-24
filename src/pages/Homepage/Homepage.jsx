import React, { useState } from "react";
import Header from "./components/Header/Header";
import Brief from "./components/Brief/Brief";
import ScrollTopBtn from "../../components/ScrollTopBtn";
import "./Homepage.scss";
import MakeOrder from "./components/MakeOrder/MakeOrder";

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
    </div>
  );
};

export default Homepage;
