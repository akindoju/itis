import React, { useState } from "react";
import CategoriesPopup from "../CategoriesPopup/CategoriesPopup";
import "./NavBar.scss";

const NavBar = () => {
  const [navBarActive, setNavBarActive] = useState(false);
  const [isCategoriesHovered, setIsCategoriesHovered] = useState(false);

  const settingNavBar = () => {
    window.scrollY > 150 ? setNavBarActive(true) : setNavBarActive(false);
  };

  window.addEventListener("scroll", settingNavBar);

  return (
    <div
      className={navBarActive ? "navBarContainer active" : "navBarContainer"}
    >
      <div className="navBar__title">Itis</div>

      <ul className="navBar__options">
        <li>Home</li>
        <div
          className="navBar__options--3"
          onMouseOver={() => {
            setIsCategoriesHovered(true);
          }}
          onMouseLeave={() => {
            setIsCategoriesHovered(false);
          }}
        >
          <li>Categories</li>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>arrow_drop_down</title>
            <path d="M6.984 9.984h10.031l-5.016 5.016z"></path>
          </svg>
        </div>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="navBar__utilities">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>search</title>
          <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
        </svg>

        <div className="navBar__utilities--meals">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
          >
            <title>Meals</title>
            <g>
              <g>
                <g>
                  <path
                    d="M176.583,188.948c-32.604,15.896-59.458,40.927-77.646,72.375c-2.958,5.104-1.208,11.625,3.885,14.573
				c1.688,0.979,3.521,1.438,5.333,1.438c3.688,0,7.271-1.906,9.24-5.323c16.063-27.76,39.771-49.854,68.542-63.896
				c5.292-2.583,7.49-8.969,4.906-14.26C188.281,188.563,181.917,186.344,176.583,188.948z"
                  />
                  <path
                    d="M501.333,341.333H479.46c-5.158-108.708-87.964-197.228-194.176-211.193c1.725-3.928,2.716-8.249,2.716-12.807
				c0-17.646-14.354-32-32-32s-32,14.354-32,32c0,4.559,0.991,8.879,2.716,12.807C120.504,144.105,37.698,232.625,32.54,341.333
				H10.667C4.771,341.333,0,346.104,0,352v10.688c0,16.052,4.708,31.604,13.625,44.979c7.927,11.896,21.198,19,35.5,19h413.75
				c14.292,0,27.573-7.104,35.51-19.01C507.292,394.281,512,378.74,512,362.688V352C512,346.104,507.229,341.333,501.333,341.333z
				 M256,106.667c5.885,0,10.667,4.781,10.667,10.667c0,5.885-4.781,10.667-10.667,10.667s-10.667-4.781-10.667-10.667
				C245.333,111.448,250.115,106.667,256,106.667z M256,149.333c108.15,0,196.526,85.22,202.126,192H53.874
				C59.474,234.553,147.85,149.333,256,149.333z M490.667,362.688c0,11.823-3.469,23.292-10.042,33.146
				c-3.969,5.948-10.604,9.5-17.75,9.5H49.125c-7.146,0-13.792-3.552-17.76-9.51c-6.563-9.854-10.031-21.313-10.031-33.135v-0.021
				h469.333V362.688z"
                  />
                </g>
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>

          <h6>0</h6>
        </div>

        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>Log out</title>
          <path d="M12 16h-10v-4h10v-4l6 6-6 6zM32 0v26l-12 6v-6h-12v-8h2v6h10v-18l8-4h-18v8h-2v-10z"></path>
        </svg>
      </div>
      {isCategoriesHovered ? <CategoriesPopup /> : null}
    </div>
  );
};

export default NavBar;
