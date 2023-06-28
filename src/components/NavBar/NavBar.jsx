import React, { useEffect, useRef, useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import AuthModal from "../AuthModal/AuthModal";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.scss";
import { createPortal } from "react-dom";
import { Link as Scroll } from "react-scroll";
import CartModal from "../CartModal/CartModal";
import SearchModal from "../SearchModal/SearchModal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/slices/userSlice";
import { setIsSearchClicked } from "../../Redux/slices/mealsSlice";

const NavBar = () => {
  const [navBarActive, setNavBarActive] = useState(false);
  const [isAuthClicked, setIsAuthClicked] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [isLogoutClicked, setIsLogoutClicked] = useState(false);
  const [isNavMenuClicked, setIsNavMenuClicked] = useState(false);

  const authIconRef = useRef(null);
  const cartIconRef = useRef(null);
  const searchIconRef = useRef(null);

  const location = useLocation();
  const dispatch = useDispatch();

  const authModal = document.getElementById("auth");
  const cartModal = document.getElementById("cart");
  const searchModal = document.getElementById("search");

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isSearchClicked = useSelector((state) => state.meals.isSearchClicked);
  const cartItems = useSelector((state) => state.cart.cartItems);

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
    if (
      (isAuthClicked && authModal) ||
      (isCartClicked && cartModal) ||
      (isSearchClicked && searchModal) ||
      isNavMenuClicked
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [
    isAuthClicked,
    authModal,
    isCartClicked,
    cartModal,
    isSearchClicked,
    searchModal,
    isNavMenuClicked,
  ]);

  return (
    <div className={navBarActive ? "navBar active" : "navBar"}>
      <div className="nav-container">
        <div className="navBar__utilities">
          <div className="navBar__utilities--icons">
            <div
              className={
                isAuthClicked
                  ? "navBar__utilities--icons-auth isUtilActive"
                  : "navBar__utilities--icons-auth"
              }
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="32"
                viewBox="0 0 36 32"
                ref={authIconRef}
                onClick={() => {
                  if (isLoggedIn) {
                    setIsLogoutClicked(true);
                  } else {
                    setIsAuthClicked(!isAuthClicked);
                  }
                }}
              >
                <title>Login</title>
                <path d="M0.5 31.983c0.268 0.067 0.542-0.088 0.612-0.354 1.030-3.843 5.216-4.839 7.718-5.435 0.627-0.149 1.122-0.267 1.444-0.406 2.85-1.237 3.779-3.227 4.057-4.679 0.034-0.175-0.029-0.355-0.165-0.473-1.484-1.281-2.736-3.204-3.526-5.416-0.022-0.063-0.057-0.121-0.103-0.171-1.045-1.136-1.645-2.337-1.645-3.294 0-0.559 0.211-0.934 0.686-1.217 0.145-0.087 0.236-0.24 0.243-0.408 0.221-5.094 3.849-9.104 8.299-9.13 0.005 0 0.102 0.007 0.107 0.007 4.472 0.062 8.077 4.158 8.206 9.324 0.004 0.143 0.068 0.277 0.178 0.369 0.313 0.265 0.459 0.601 0.459 1.057 0 0.801-0.427 1.786-1.201 2.772-0.037 0.047-0.065 0.101-0.084 0.158-0.8 2.536-2.236 4.775-3.938 6.145-0.144 0.116-0.212 0.302-0.178 0.483 0.278 1.451 1.207 3.44 4.057 4.679 0.337 0.146 0.86 0.26 1.523 0.403 2.477 0.536 6.622 1.435 7.639 5.232 0.060 0.223 0.262 0.37 0.482 0.37 0.043 0 0.086-0.006 0.13-0.017 0.267-0.072 0.425-0.346 0.354-0.613-1.175-4.387-5.871-5.404-8.393-5.95-0.585-0.127-1.090-0.236-1.336-0.344-1.86-0.808-3.006-2.039-3.411-3.665 1.727-1.483 3.172-3.771 3.998-6.337 0.877-1.14 1.359-2.314 1.359-3.317 0-0.669-0.216-1.227-0.644-1.663-0.238-5.604-4.237-10.017-9.2-10.088l-0.149-0.002c-4.873 0.026-8.889 4.323-9.24 9.83-0.626 0.46-0.944 1.105-0.944 1.924 0 1.183 0.669 2.598 1.84 3.896 0.809 2.223 2.063 4.176 3.556 5.543-0.403 1.632-1.55 2.867-3.414 3.676-0.241 0.105-0.721 0.22-1.277 0.352-2.541 0.604-7.269 1.729-8.453 6.147-0.071 0.267 0.087 0.54 0.354 0.612z"></path>
              </svg>

              {isLogoutClicked ? (
                <div
                  className="navBar__utilities--icons-auth-logout"
                  onClick={async () => {
                    await dispatch(logout());
                    setIsLogoutClicked(false);
                  }}
                >
                  <p>Logout</p>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>Log Out</title>
                    <path d="M24 20v-4h-10v-4h10v-4l6 6zM22 18v8h-10v6l-12-6v-26h22v10h-2v-8h-16l8 4v18h8v-6z"></path>
                  </svg>
                </div>
              ) : null}
            </div>

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
                <title>Cart</title>
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

              <div className="navBar__utilities--icons-meals-cart">
                {isLoggedIn ? cartItems.length : "0"}
              </div>
            </div>

            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              onClick={() => dispatch(setIsSearchClicked(true))}
              ref={searchIconRef}
            >
              <title>search</title>
              <path d="M9.516 14.016q1.875 0 3.188-1.313t1.313-3.188-1.313-3.188-3.188-1.313-3.188 1.313-1.313 3.188 1.313 3.188 3.188 1.313zM15.516 14.016l4.969 4.969-1.5 1.5-4.969-4.969v-0.797l-0.281-0.281q-1.781 1.547-4.219 1.547-2.719 0-4.617-1.875t-1.898-4.594 1.898-4.617 4.617-1.898 4.594 1.898 1.875 4.617q0 0.984-0.469 2.227t-1.078 1.992l0.281 0.281h0.797z"></path>
            </svg>
          </div>
        </div>

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

        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="navBar__utilities--icons-menu"
          onClick={() => setIsNavMenuClicked(true)}
        >
          <title>menu</title>
          <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
        </svg>
      </div>

      {isAuthClicked && authModal
        ? createPortal(
            <AuthModal
              setIsAuthClicked={setIsAuthClicked}
              authIconRef={authIconRef}
            />,
            authModal
          )
        : null}

      {isCartClicked && cartModal
        ? createPortal(
            <CartModal
              setIsCartClicked={setIsCartClicked}
              cartIconRef={cartIconRef}
            />,
            cartModal
          )
        : null}

      {isSearchClicked && searchModal
        ? createPortal(
            <SearchModal
              setIsSearchClicked={() => dispatch(setIsSearchClicked(false))}
              searchIconRef={searchIconRef}
            />,
            searchModal
          )
        : null}

      {isNavMenuClicked && (
        <NavMenu setIsNavMenuClicked={setIsNavMenuClicked} />
      )}
    </div>
  );
};

export default NavBar;
