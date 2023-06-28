import { Link, useLocation } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import "./NavMenu.scss";

const NavMenu = ({ setIsNavMenuClicked }) => {
  const location = useLocation();

  return (
    <div className="navMenuContainer">
      <svg
        className="navMenuContainer__svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        onClick={() => setIsNavMenuClicked(false)}
      >
        <title>close</title>
        <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
      </svg>
      <div className="navMenu">
        <div className="navMenu__title">Itis</div>
        <div>
          <ul className="navMenu__items">
            <li onClick={() => setIsNavMenuClicked(false)}>
              <Link to="/">Home</Link>
            </li>

            {location.pathname === "/" ? (
              <Scroll to="ready-to-eat" smooth={true} duration={1000}>
                <li onClick={() => setIsNavMenuClicked(false)}>Ready-to-Eat</li>
              </Scroll>
            ) : null}

            <li onClick={() => setIsNavMenuClicked(false)}>
              <Link to="/about">About</Link>
            </li>

            <li onClick={() => setIsNavMenuClicked(false)}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
