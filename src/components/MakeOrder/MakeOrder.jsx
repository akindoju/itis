import React from "react";
import "./MakeOrder.scss";
import { Link } from "react-scroll";

const MakeOrder = () => {
  return (
    <div className="makeOrder">
      <h1>Get Your Meals Delivered Straightaway!</h1>
      <h4>Chop Belle-Full Anywhere You Are.</h4>

      <button>
        <Link smooth={true} duration={1000} to="menu">
          Order Now
        </Link>
      </button>
    </div>
  );
};

export default MakeOrder;
