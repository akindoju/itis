import NavBar from "../NavBar/NavBar";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header" id="top">
      <NavBar />

      <div className="header__content">
        <div className="header__content--main">
          <h1>Itis</h1>
          <h4>Food from your fingertips</h4>
        </div>

        <div className="header__content--sub">
          <button>Surprise Me!</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
