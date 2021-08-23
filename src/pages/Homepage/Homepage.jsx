import React from "react";
import Header from "./components/Header/Header";
import Brief from "./components/Brief/Brief";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepageContainer">
      <Header />
      <Brief />
    </div>
  );
};

export default Homepage;
