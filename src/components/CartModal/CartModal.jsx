import React, { useRef, useState } from "react";
import useOutsideAlerter from "../OutsideAlerter/useOutsideAlerter";
import "./CartModal.scss";

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

const CartItem = ({ name, price, img }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="cartItemWrapper">
      <div className="cartItem">
        <img src={img} alt="Image1" />

        <div className="cartItem__text">
          <p className="cartItem__text--name">{name}</p>

          <p className="cartItem__text--price">
            {quantity} x {price}
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
  );
};

const CartModal = ({ setIsCartClicked, cartIconRef }) => {
  const wrapperRef = useRef(null);

  const hideCart = () => setIsCartClicked(false);

  useOutsideAlerter(wrapperRef, hideCart, cartIconRef);

  return (
    <div className="overlay">
      <div className="authentication cart" ref={wrapperRef}>
        <div className="cart__items">
          {cartItemsArr.map((item) => {
            return (
              <CartItem
                name={item.name}
                price={item.price}
                img={item.img}
                key={item.name}
              />
            );
          })}
        </div>

        <p className="cart__total">TOTAL: ₦80,000</p>

        <button className="cart__button">Confirm</button>
      </div>
    </div>
  );
};

export default CartModal;
