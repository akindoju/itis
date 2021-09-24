import { Link } from "react-scroll";
import "./NavBarOptions.scss";

const NavBarOptions = ({ setIsNavBarOptionsBtnClicked }) => {
  return (
    <div className="navBarOptionsContainer">
      <svg
        className="navBarOptionsContainer__svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        onClick={() => setIsNavBarOptionsBtnClicked(false)}
      >
        <title>x</title>
        <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
      </svg>
      <div className="navBarOptions">
        <div className="navBarOptions__akindoju">Akindoju</div>
        <div>
          <ul className="navBarOptions__items">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>
              <Link
                to="writeToMe"
                duration={1200}
                smooth={true}
                onClick={() => setIsNavBarOptionsBtnClicked(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarOptions;
