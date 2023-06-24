import React from "react";
import "./Header.scss";
import { useDispatch } from "react-redux";
import {
  setIsSearchClicked,
  surpriseMeal,
} from "../../Redux/slices/mealsSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header" id="top">
      <div className="header__content">
        <div className="header__content--main">
          <h1>Itis</h1>
          <h4>food from your fingertips</h4>
        </div>

        <div className="header__content--sub">
          <button
            onClick={async () => {
              const response = await dispatch(surpriseMeal());

              if (response.payload === "success") {
                dispatch(setIsSearchClicked(true));
              }
            }}
          >
            Surprise Me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
