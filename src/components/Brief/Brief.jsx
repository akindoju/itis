import React from "react";
import "./Brief.scss";

const Brief = () => {
  return (
    <div className="brief">
      <div className="brief__text">
        <h1>From The Kitchen With Love</h1>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos
          saepe consequatur et eaque, minus commodi, hic, qui voluptatem
          suscipit harum fuga expedita ullam iusto eveniet debitis maiores
          aspernatur minima.
        </h4>
      </div>

      <div className="brief__images">
        <div className="brief__images--container">
          <img
            src="https://images.unsplash.com/photo-1624153064067-566cae78993d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="Image1"
          />
        </div>

        <div className="brief__images--container">
          <img
            src="https://www.zamxahotels.com/guides/wp-content/uploads/2020/01/Jollof-and-Beef-or-Chicken-min-1024x735.jpg"
            alt="Image2"
          />
        </div>

        <div className="brief__images--container brief__images--container--3">
          <img
            src="https://www.willflyforfood.net/wp-content/uploads/2021/06/nigerian-food-dodo.jpg.webp"
            alt="Image3"
          />
        </div>
      </div>
    </div>
  );
};

export default Brief;
