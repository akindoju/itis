import React from "react";
import "./ReadyToEat.scss";
import { useDispatch, useSelector } from "react-redux";
import Pancake from "../../Images/ctg-1a.webp";
import Burger from "../../Images/ctg-2a.webp";
import Fruits from "../../Images/ctg-3a.webp";
import Pastries from "../../Images/ctg-4b.webp";
import Steak from "../../Images/ctg-5b.webp";
import Soup from "../../Images/ctg-6a.webp";
import Pasta from "../../Images/ctg-7a.webp";
import Drinks from "../../Images/ctg-8a.webp";
import { updateCart } from "../../Redux/slices/userSlice";

const ReadyToEat = () => {
  const foodItems = [
    {
      id: "Pancake",
      name: "Pancake",
      previousPrice: 9000,
      discountedPrice: 5500,
      img: Pancake,
    },
    {
      id: "Burger and Chips",
      name: "Burger and Chips",
      previousPrice: 12000,
      discountedPrice: 7500,
      img: Burger,
    },
    {
      id: "Assorted Fruits",
      name: "Assorted Fruits",
      previousPrice: 9000,
      discountedPrice: 4500,
      img: Fruits,
    },
    {
      id: "Pastries",
      name: "Tasty Pastries",
      previousPrice: 10000,
      discountedPrice: 8500,
      img: Pastries,
    },
    {
      id: "Steak",
      name: "Steak",
      previousPrice: 9000,
      discountedPrice: 7500,
      img: Steak,
    },
    {
      id: "Soup",
      name: "Soup",
      previousPrice: 5000,
      discountedPrice: 3500,
      img: Soup,
    },
    {
      id: "Pasta",
      name: "Pasta",
      previousPrice: 7000,
      discountedPrice: 5500,
      img: Pasta,
    },
    {
      id: "Soft Drinks",
      name: "Soft Drinks",
      previousPrice: 2600,
      discountedPrice: 1800,
      img: Drinks,
    },
  ];

  const myCart = useSelector((state) => state.user.user.myCart);
  const dispatch = useDispatch();

  return (
    <div className="readyToEat" id="ready-to-eat">
      <div className="container">
        <h1 className="readyToEat__heading">"Food is Ready"</h1>

        <div className="readyToEat__grid">
          {foodItems.map((item, idx) => {
            let inCart = myCart?.find((meal) => {
              return meal.id === item.id;
            });

            return (
              <div className="readyToEat__grid--item" key={item.name}>
                <div className="readyToEat__grid--item--hovered">
                  {inCart ? (
                    <div
                      className="search__result--item-details-btns"
                      style={{
                        position: "absolute",
                        bottom: "8rem",
                        left: 0,
                        right: 0,
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "rgba(0,0,0, 0.8)",
                        padding: "0.9rem",
                        border: "none",
                        borderRadius: "5rem",
                        width: "60%",
                        marginInline: "auto",
                      }}
                    >
                      <button
                        onClick={() => {
                          dispatch(
                            updateCart({
                              meal: {
                                name: item.name,
                                price: item.discountedPrice,
                                img: item.img,
                                quantity: item.quantity,
                                id: item.id,
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

                      <p>{inCart.quantity}</p>

                      <button
                        onClick={() => {
                          dispatch(
                            updateCart({
                              meal: {
                                name: item.name,
                                price: item.discountedPrice,
                                img: item.img,
                                quantity: item.quantity,
                                id: item.id,
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
                  ) : (
                    <button
                      className="search__result--item-cart"
                      style={{
                        position: "absolute",
                        bottom: "8rem",
                        marginInline: "auto",
                        left: 0,
                        right: 0,
                        width: "60%",
                        padding: "1.2rem",
                      }}
                      onClick={() => {
                        dispatch(
                          updateCart({
                            meal: {
                              name: item.name,
                              price: item.discountedPrice,
                              img: item.img,
                              quantity: 1,
                              id: item.id,
                            },
                            status: "add",
                          })
                        );
                      }}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>

                <div className="readyToEat__grid--item--fresh">Fresh</div>
                <div
                  className={`readyToEat__grid--item--img readyToEat__grid--item--img-${
                    idx + 1
                  }`}
                />
                <h1>{item.name}</h1>
                <h4>
                  <span>₦{item.previousPrice.toLocaleString()}</span>₦
                  {item.discountedPrice.toLocaleString()}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReadyToEat;
