import React, { useRef } from "react";
import useOutsideAlerter from "../OutsideAlerter/useOutsideAlerter";
import "./SearchModal.scss";

const cartItemsArr = [
  {
    name: "Jollof Rice",
    price: "₦1000",
    img: "https://images.unsplash.com/photo-1624153064067-566cae78993d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Chicken Shawarma",
    price: "₦500",
    img: "https://images.unsplash.com/photo-1624153064067-566cae78993d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Egusi Soup",
    price: "₦800",
    img: "https://images.unsplash.com/photo-1624153064067-566cae78993d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Pounded Yam",
    price: "₦1200",
    img: "https://images.unsplash.com/photo-1624153064067-566cae78993d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Pepper Soup",
    price: "₦1500",
    img: "https://images.unsplash.com/photo-1624153064067-566cae78993d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Beef Burger",
    price: "₦700",
    img: "https://images.unsplash.com/photo-1624153064067-566cae78993d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
];

const SearchItem = ({ name, price, img }) => {
  return (
    <div className="search__result--item">
      <div className="search__result--item-details">
        <div className="search__result--item-details-main">
          <img src={img} alt="search result" />

          <div className="search__result--item-details-main-text">
            <p className="search__result--item-details-main-text-name">
              {name}
            </p>

            <p className="search__result--item-details-main-text-price">
              {price}
            </p>
          </div>
        </div>
      </div>

      <button className="search__result--item-cart">Add to Cart</button>
    </div>
  );
};

const SearchModal = ({ setIsSearchClicked, searchIconRef }) => {
  const wrapperRef = useRef(null);

  const hideSearch = () => setIsSearchClicked(false);

  useOutsideAlerter(wrapperRef, hideSearch, searchIconRef);

  return (
    <div className="search-overlay">
      <div className="search" ref={wrapperRef}>
        <form
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

        <div className="search__result">
          {cartItemsArr.map((item) => {
            return (
              <SearchItem
                name={item.name}
                img={item.img}
                price={item.price}
                key={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
