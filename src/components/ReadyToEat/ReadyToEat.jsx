import React from "react";
import "./ReadyToEat.scss";

const ReadyToEat = () => {
  const foodItems = [
    { name: "Pancake", previousPrice: "₦9,000", discountedPrice: "₦5,500" },
    {
      name: "Burger and Chips",
      previousPrice: "₦12,000",
      discountedPrice: "₦7,500",
    },
    {
      name: "Assorted Fruits",
      previousPrice: "₦9,000",
      discountedPrice: "₦4,500",
    },
    {
      name: "Tasty Pastries",
      previousPrice: "₦10,000",
      discountedPrice: "₦8,500",
    },
    { name: "Steak", previousPrice: "₦9,000", discountedPrice: "₦7,500" },
    { name: "Soup", previousPrice: "₦5,000", discountedPrice: "₦3,500" },
    { name: "Pasta", previousPrice: "₦7,000", discountedPrice: "₦5,500" },
    { name: "Soft Drinks", previousPrice: "₦2,600", discountedPrice: "₦1,800" },
  ];

  return (
    <div className="readyToEat" id="ready-to-eat">
      <div className="container">
        <h1 className="readyToEat__heading">"Food is Ready"</h1>

        <div className="readyToEat__grid">
          {foodItems.map((item, idx) => {
            return (
              <div className="readyToEat__grid--item">
                <div className="readyToEat__grid--item--hovered">
                  <div className="readyToEat__grid--item--search">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <title>search</title>
                      <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
                    </svg>
                  </div>

                  <div className="readyToEat__grid--item--btns">
                    <button>Add To Cart</button>
                  </div>
                </div>

                <div className="readyToEat__grid--item--fresh">Fresh</div>
                <div
                  className={`readyToEat__grid--item--img readyToEat__grid--item--img-${
                    idx + 1
                  }`}
                />
                <h1>{item.name}</h1>
                <h4>
                  <span>{item.previousPrice}</span>
                  {item.discountedPrice}
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
