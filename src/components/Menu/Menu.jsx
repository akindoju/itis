import React from "react";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__image">
        <img
          src="https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=401&q=80"
          alt="Menu"
        />
      </div>

      <div className="menu__text">
        <h1 className="menu__text--heading">Menu</h1>

        <div className="menu__text__item">
          <div className="menu__text__item--main">
            <h4>Pounded Yam</h4>
            <h5>
              <span>₦5,000</span>
              ₦3,500
            </h5>
          </div>

          <p className="menu__text__item--sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            cupiditate...
          </p>
        </div>

        <div className="menu__text__item">
          <div className="menu__text__item--main">
            <h4>Jollof Rice</h4>
            <h5>
              <span>₦12,000</span>
              ₦7,500
            </h5>
          </div>

          <p className="menu__text__item--sub">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            natus nihil consequuntur...
          </p>
        </div>

        <div className="menu__text__item">
          <div className="menu__text__item--main">
            <h4>Indomie</h4>
            <h5>
              <span>₦51,000</span>
              ₦30,000
            </h5>
          </div>

          <p className="menu__text__item--sub">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ut
            odit necessitatibus architecto, ipsa laudantium?...
          </p>
        </div>

        <div className="menu__text__item">
          <div className="menu__text__item--main">
            <h4>Beans and Bread</h4>
            <h5>
              <span>₦15,000</span>
              ₦14,950
            </h5>
          </div>

          <p className="menu__text__item--sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            cupiditate...
          </p>
        </div>

        <div className="menu__text__item">
          <div className="menu__text__item--main">
            <h4>Garri</h4>
            <h5>
              <span>₦92,000</span>
              ₦2,500
            </h5>
          </div>

          <p className="menu__text__item--sub">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            omnis assumenda nulla in ab, earum sint, nihil consequatur quidem
            excepturi veritatis mollitia. Aliquid, sapiente? Excepturi fuga
            optio voluptatibus sapiente...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
