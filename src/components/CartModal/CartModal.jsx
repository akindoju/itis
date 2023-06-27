import React, { useRef, useState } from "react";
import "./CartModal.scss";
import { useSelector } from "react-redux";
import Counter from "../Counter/Counter";

const CartItem = ({ name, price, img, quantity }) => {
  // const [quantity, setQuantity] = useState(1);

  return (
    <div className="cartItemWrapper">
      <div className="cartItem">
        <img src={img} alt="Image1" />

        <div className="cartItem__text">
          <p className="cartItem__text--name">{name}</p>

          <p className="cartItem__text--price">
            {quantity} x ₦{price?.toLocaleString()}
          </p>
        </div>
      </div>

      {/* <Counter quantity={quantity} setQuantity={setQuantity} /> */}
    </div>
  );
};

const CartModal = ({ setIsCartClicked, cartIconRef }) => {
  const wrapperRef = useRef(null);

  const hideCart = () => setIsCartClicked(false);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const cartItems = useSelector((state) => state.cart.cartItems);

  // useOutsideAlerter(wrapperRef, hideCart, cartIconRef);

  return (
    <div className="overlay">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="close-modal"
        onClick={() => {
          hideCart();
        }}
      >
        <title>close</title>
        <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
      </svg>

      <div className="authentication cart" ref={wrapperRef}>
        {isLoggedIn && cartItems.length ? (
          <>
            <div className="cart__items">
              {cartItems.map((item) => {
                return (
                  <CartItem
                    name={item.name}
                    price={item.price}
                    img={item.img}
                    quantity={item.quantity}
                    key={item.id}
                  />
                );
              })}
            </div>

            <p className="cart__total">{`TOTAL: ₦${cartItems
              .reduce((accumulator, currentValue) => {
                return accumulator + currentValue.quantity * currentValue.price;
              }, 0)
              .toLocaleString()}`}</p>

            <button className="cart__button">Confirm</button>
          </>
        ) : !isLoggedIn ? (
          <p className="cart__prompt">Log in to access cart</p>
        ) : !cartItems.length ? (
          <p className="cart__prompt">There are no meals in your cart.</p>
        ) : null}
      </div>
    </div>
  );
};

export default CartModal;
