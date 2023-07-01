import React, { useRef } from "react";
import "./CartModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../Redux/slices/userSlice";

const CartItem = ({ name, price, img, quantity, id }) => {
  const dispatch = useDispatch();

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

      <div className="search__result--item-details-btns">
        <button
          onClick={async () => {
            const response = await dispatch(
              updateCart({
                meal: {
                  name,
                  price,
                  img,
                  quantity,
                  id,
                },
                status: "remove",
              })
            );
          }}
        >
          <svg
            className={"search__result--item-details-btns-active"}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>remove</title>
            <path d="M16 10c0 0.553-0.048 1-0.601 1h-10.798c-0.552 0-0.601-0.447-0.601-1s0.049-1 0.601-1h10.799c0.552 0 0.6 0.447 0.6 1z"></path>
          </svg>
        </button>

        <p>{quantity}</p>

        <button
          onClick={() => {
            dispatch(
              updateCart({
                meal: {
                  name,
                  price,
                  img,
                  quantity,
                  id,
                },
                status: "add",
              })
            );
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
            <title>add</title>
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

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const myCart = useSelector((state) => state.user.user.myCart);

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
        {isLoggedIn && myCart?.length ? (
          <>
            <div className="cart__items">
              {myCart.map((item) => {
                return (
                  <CartItem
                    name={item.name}
                    price={item.price}
                    img={item.img}
                    quantity={item.quantity}
                    id={item.id}
                    key={item.id}
                  />
                );
              })}
            </div>

            <p className="cart__total">{`TOTAL: ₦${myCart
              .reduce((accumulator, currentValue) => {
                return accumulator + currentValue.quantity * currentValue.price;
              }, 0)
              .toLocaleString()}`}</p>

            <button className="cart__button">Confirm</button>
          </>
        ) : !isLoggedIn ? (
          <p className="cart__prompt">Log in to access cart</p>
        ) : !myCart?.length ? (
          <p className="cart__prompt">There are no meals in your cart.</p>
        ) : null}
      </div>
    </div>
  );
};

export default CartModal;
