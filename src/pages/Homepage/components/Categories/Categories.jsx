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
          <img
            src="https://images.unsplash.com/photo-1620314220867-90d1ba926c62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=416&q=80"
            alt="Item 1"
          />
          <h1>Pancake</h1>
          <h4>
            <span>₦9,000</span>
            ₦5,500
          </h4>
        </div>

        <div className="categories__grid--item">
          <img
            src="https://images.unsplash.com/photo-1616205255807-b55f2513eced?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
            alt="Item 1"
          />
          <h1>Burger and Chips</h1>
          <h4>
            <span>₦12,000</span>
            ₦7,500
          </h4>
        </div>

        <div className="categories__grid--item">
          <img
            src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="Item 1"
          />
          <h1>Assorted Fruits</h1>
          <h4>
            <span>₦9,000</span>
            ₦6,000
          </h4>
        </div>

        <div className="categories__grid--item">
          <img
            src="https://images.unsplash.com/photo-1582454235987-1e597bafcf58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="Item 1"
          />
          <h1>Spring Rolls</h1>
          <h4>
            <span>₦13,000</span>
            ₦8,000
          </h4>
        </div>

        <div className="categories__grid--item">
          <img
            src="https://images.unsplash.com/photo-1562847814-98521f174785?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="Item 1"
          />
          <h1>Steak</h1>
          <h4>
            <span>₦15,000</span>
            ₦10,000
          </h4>
        </div>

        <div className="categories__grid--item">
          <img
            src="https://images.unsplash.com/photo-1609015746380-571227e2bc72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="Item 1"
          />
          <h1>Bread and Soup</h1>
          <h4>
            <span>₦5,500</span>
            ₦3,500
          </h4>
        </div>

        <div className="categories__grid--item">
          <img
            src="https://images.unsplash.com/photo-1602833280958-1657662ccc58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            alt="Item 1"
          />
          <h1>Pasta</h1>
          <h4>
            <span>₦5,000</span>
            ₦4,500
          </h4>
        </div>

        <div className="categories__grid--item">
          <img
            src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=407&q=80"
            alt="Item 1"
          />
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
