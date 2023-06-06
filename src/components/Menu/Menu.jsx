import React from "react";
import "./Menu.scss";

const Menu = () => {
  const menu = [
    {
      name: "Jollof Rice",
      previousPrice: "₦3500",
      discountedPrice: "₦1800",
      description:
        "A classic Nigerian rice dish cooked in a flavorful tomato-based sauce.",
    },
    {
      name: "Pizza Margherita",
      previousPrice: "₦3800",
      discountedPrice: "₦2000",
      description:
        "A traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.",
    },
    {
      name: "Lobster Bisque",
      previousPrice: "₦12350",
      discountedPrice: "₦8590",
      description:
        "A rich and creamy soup made with lobster meat, perfect for seafood lovers.",
    },
    {
      name: "Spaghetti Carbonara",
      previousPrice: "₦4800",
      discountedPrice: "₦2400",
      description:
        "An Italian pasta dish with creamy sauce made from eggs, cheese, and pancetta.",
    },
    {
      name: "Pounded Yam with Egusi",
      previousPrice: "₦5000",
      discountedPrice: "₦3800",
      description:
        "A popular Nigerian combination of pounded yam served with egusi soup.",
    },
  ];

  return (
    <div className="menu">
      <div className="menu__image" />

      <div className="menu__text">
        <h1 className="menu__text--heading">Menu</h1>

        {menu.map((item) => {
          return (
            <div className="menu__text__item">
              <div className="menu__text__item--main">
                <h4>{item.name}</h4>
                <h5>
                  <span>{item.previousPrice}</span>
                  {item.discountedPrice}
                </h5>
              </div>

              <p className="menu__text__item--sub">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
