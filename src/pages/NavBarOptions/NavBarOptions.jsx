import { useHistory } from "react-router";
import "./NavBarOptions.scss";

const NavBarOptions = ({ setIsNavBarOptionsBtnClicked }) => {
  const history = useHistory();

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
        <div className="navBarOptions__title">Itis</div>
        <div>
          <ul className="navBarOptions__items">
            <li
              onClick={() => {
                history.push("/");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                history.push("/about");
              }}
            >
              About
            </li>
            <li
              onClick={() => {
                history.push("/contact");
              }}
            >
              Contact
            </li>
            <li>Payments</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarOptions;
