import React from "react";
import "./Brief.scss";
import brief1 from "../../Images/brief-1.webp";
import brief2 from "../../Images/brief-2.webp";
import brief3 from "../../Images/brief-3.webp";

const Brief = () => {
  return (
    <div className="brief">
      <div className="container">
        <div className="brief__text">
          <h1>From The Kitchen With Love</h1>
          <h4>
            A culinary journey that combines mouthwatering flavors with a
            sprinkle of pop culture magic! Our team of talented chefs and food
            enthusiasts is dedicated to bringing you a delightful dining
            experience that will make your taste buds sing. We don't just cook
            food – we serve happiness on a plate. Bon appétit, and may the{" "}
            <span>force</span> flavor be with you!
          </h4>
        </div>

        <div className="brief__images">
          <div className="brief__images--container">
            <img src={brief1} alt="Food 1" />
          </div>

          <div className="brief__images--container">
            <img src={brief2} alt="Food 2" />
          </div>

          <div className="brief__images--container brief__images--container--3">
            <img src={brief3} alt="Food 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brief;
