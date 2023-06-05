import React, { useEffect, useRef, useState } from "react";
import NavBarOptions from "../NavBarOptions/NavBarOptions";
import Authentication from "../Authentication/Authentication";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";
import { createPortal } from "react-dom";
import { Link as Scroll } from "react-scroll";
import Cart from "../Cart/Cart";

const NavBar = () => {
  const [navBarActive, setNavBarActive] = useState(false);
  const [isAuthClicked, setIsAuthClicked] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNavBarOptionsBtnClicked, setIsNavBarOptionsBtnClicked] =
    useState(false);

  const authIconRef = useRef(null);
  const cartIconRef = useRef(null);
  const location = useLocation();

  const authModal = document.getElementById("auth");
  const cartModal = document.getElementById("cart");

  useEffect(() => {
    const settingNavBar = () => {
      window.scrollY > 150 ? setNavBarActive(true) : setNavBarActive(false);
    };

    window.addEventListener("scroll", settingNavBar);

    return () => {
      window.removeEventListener("scroll", settingNavBar);
    };
  }, []);

  useEffect(() => {
    if ((isAuthClicked && authModal) || (isCartClicked && cartModal)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isAuthClicked, authModal, isCartClicked, cartModal]);

  return (
    <div className={navBarActive ? "navBar active" : "navBar"}>
      <ul className="navBar__options">
        <li>
          <Link to="/">Home</Link>
        </li>

        {location.pathname === "/" ? (
          <li>
            <Scroll to="ready-to-eat" smooth={true} duration={1000}>
              Ready-to-Eat
            </Scroll>
          </li>
        ) : null}

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="navBar__utilities">
        <form
          className={
            navBarActive
              ? "navBar__utilities--search search-active"
              : "navBar__utilities--search"
          }
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input placeholder="Search meal" />
          <button type="submit">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>search1</title>
              <path d="M9.516 14.016q1.875 0 3.188-1.313t1.313-3.188-1.313-3.188-3.188-1.313-3.188 1.313-1.313 3.188 1.313 3.188 3.188 1.313zM15.516 14.016l4.969 4.969-1.5 1.5-4.969-4.969v-0.797l-0.281-0.281q-1.781 1.547-4.219 1.547-2.719 0-4.617-1.875t-1.898-4.594 1.898-4.617 4.617-1.898 4.594 1.898 1.875 4.617q0 0.984-0.469 2.227t-1.078 1.992l0.281 0.281h0.797z"></path>
            </svg>
          </button>
        </form>

        <div className="navBar__utilities--icons">
          <div
            onClick={() => setIsCartClicked(!isCartClicked)}
            className="navBar__utilities--icons-meals"
            ref={cartIconRef}
          >
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

            <div className="navBar__utilities--icons-meals-cart">0</div>
          </div>

          <div
            className={
              isAuthClicked
                ? "navBar__utilities--icons-auth isUtilActive"
                : "navBar__utilities--icons-auth"
            }
          >
            {isLoggedIn ? (
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                ref={authIconRef}
                onClick={() => setIsAuthClicked(!isAuthClicked)}
              >
                <title>Log Out</title>
                <path d="M24 20v-4h-10v-4h10v-4l6 6zM22 18v8h-10v6l-12-6v-26h22v10h-2v-8h-16l8 4v18h8v-6z"></path>
              </svg>
            ) : (
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                ref={authIconRef}
                onClick={() => setIsAuthClicked(!isAuthClicked)}
              >
                <title>Log In</title>
                <path d="M12 16h-10v-4h10v-4l6 6-6 6zM32 0v26l-12 6v-6h-12v-8h2v6h10v-18l8-4h-18v8h-2v-10z"></path>
              </svg>
            )}
          </div>

          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="navBar__utilities--icons-menu"
            onClick={() => setIsNavBarOptionsBtnClicked(true)}
          >
            <title>menu</title>
            <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
          </svg>
        </div>
      </div>

      {isAuthClicked && authModal
        ? createPortal(
            <Authentication
              setIsAuthClicked={setIsAuthClicked}
              authIconRef={authIconRef}
            />,
            authModal
          )
        : null}

      {isCartClicked && cartModal
        ? createPortal(
            <Cart
              setIsCartClicked={setIsCartClicked}
              cartIconRef={cartIconRef}
            />,
            cartModal
          )
        : null}

      {isNavBarOptionsBtnClicked && (
        <NavBarOptions
          setIsNavBarOptionsBtnClicked={setIsNavBarOptionsBtnClicked}
        />
      )}
    </div>
  );
};

export default NavBar;
