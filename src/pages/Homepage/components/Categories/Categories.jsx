import React from "react";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__heading">
        <h1>Our Many Varieties</h1>
        <div className="categories__heading--btns">
          <button>All Products</button>
          <button>Drinks</button>
          <button>Snacks</button>
          <button>Swallow</button>
          <button>Fruits</button>
        </div>
      </div>

      <div className="categories__grid">
        <div className="categories__grid--item">
          <div className="categories__grid--item--img categories__grid--item--img-1" />
          <h1>Pancake</h1>
          <h4>
            <span>₦9,000</span>
            ₦5,500
          </h4>
        </div>

        <div className="categories__grid--item">
          <div className="categories__grid--item--img categories__grid--item--img-2" />
          <h1>Burger and Chips</h1>
          <h4>
            <span>₦12,000</span>
            ₦7,500
          </h4>
        </div>

        <div className="categories__grid--item">
          <div className="categories__grid--item--img categories__grid--item--img-3" />
          <h1>Assorted Fruits</h1>
          <h4>
            <span>₦9,000</span>
            ₦6,000
          </h4>
        </div>

        <div className="categories__grid--item">
          <div className="categories__grid--item--img categories__grid--item--img-4" />
          <h1>Spring Rolls</h1>
          <h4>
            <span>₦13,000</span>
            ₦8,000
          </h4>
        </div>

        <div className="categories__grid--item">
          <div className="categories__grid--item--img categories__grid--item--img-5" />
          <h1>Steak</h1>
          <h4>
            <span>₦15,000</span>
            ₦10,000
          </h4>
        </div>

        <div className="categories__grid--item">
          <div className="categories__grid--item--img categories__grid--item--img-6" />
          <h1>Bread and Soup</h1>
          <h4>
            <span>₦5,500</span>
            ₦3,500
          </h4>
        </div>

        <div className="categories__grid--item">
          <div className="categories__grid--item--img categories__grid--item--img-7" />
          <h1>Pasta</h1>
          <h4>
            <span>₦5,000</span>
            ₦4,500
          </h4>
        </div>

        <div className="categories__grid--item">
          <div className="categories__grid--item--img categories__grid--item--img-8" />
          <h1>Strawberry Cocktail</h1>
          <h4>
            <span>₦3,000</span>
            ₦3,500
          </h4>
        </div>
      </div>

      <div className="categories__viewMore">
        <button>View More</button>
      </div>
    </div>
  );
};

export default Categories;
