import React, { useRef } from "react";
import useOutsideAlerter from "../OutsideAlerter/useOutsideAlerter";
import "./Cart.scss";

const cartItemsArr = [
  { name: "Jollof Rice", quantity: 2, price: "₦1000" },
  { name: "Chicken Shawarma", quantity: 1, price: "₦500" },
  { name: "Egusi Soup", quantity: 3, price: "₦800" },
  { name: "Pounded Yam", quantity: 4, price: "₦1200" },
  { name: "Pepper Soup", quantity: 2, price: "₦1500" },
  { name: "Beef Burger", quantity: 1, price: "₦700" },
];

const CartItem = ({ name, price, quantity }) => {
  return (
    <div className="cartItemWrapper">
      <div className="cartItem">
        <img
          src="https://images.unsplash.com/photo-1624153064067-566cae78993d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="Image1"
        />

        <div className="cartItem__text">
          <p className="cartItem__text--name">{name}</p>

          <p className="cartItem__text--price">
            {quantity} x {price}
          </p>
        </div>
      </div>

      <button className="cartItem__close">&#x2715;</button>
    </div>
  );
};

const Cart = ({ setIsCartClicked, cartIconRef }) => {
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
                quantity={item.quantity}
                price={item.price}
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

export default Cart;
