import React, { useRef, useState } from "react";
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
  const [quantity, setQuantity] = useState(1);

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

        <div className="search__result--item-details-btns">
          <button
            onClick={() => {
              setQuantity((qty) => qty - 1);
            }}
            disabled={quantity <= 1}
          >
            <svg
              className={
                quantity > 1
                  ? "search__result--item-details-btns-active"
                  : "search__result--item-details-btns-inactive"
              }
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>minus</title>
              <path d="M16 10c0 0.553-0.048 1-0.601 1h-10.798c-0.552 0-0.601-0.447-0.601-1s0.049-1 0.601-1h10.799c0.552 0 0.6 0.447 0.6 1z"></path>
            </svg>
          </button>

          <p>{quantity}</p>

          <button
            onClick={() => {
              setQuantity((qty) => qty + 1);
            }}
          >
            <svg
              className="search__result--item-details-btns-active"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>plus</title>
              <path d="M16 10c0 0.553-0.048 1-0.601 1h-4.399v4.399c0 0.552-0.447 0.601-1 0.601s-1-0.049-1-0.601v-4.399h-4.399c-0.552 0-0.601-0.447-0.601-1s0.049-1 0.601-1h4.399v-4.399c0-0.553 0.447-0.601 1-0.601s1 0.048 1 0.601v4.399h4.399c0.553 0 0.601 0.447 0.601 1z"></path>
            </svg>
          </button>
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
    <div className="search">
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
            <SearchItem name={item.name} img={item.img} price={item.price} />
          );
        })}
      </div>
    </div>
  );
};

export default SearchModal;
