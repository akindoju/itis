import React from "react";
import "./Menu.scss";

const Menu = () => {
  const menu = [
    {
      name: "Japanese gohan rice",
      previousPrice: 8700,
      discountedPrice: 5950,
      description:
        "The essential, sticky short-grain rice that forms the basis of traditional Japanese cuisine..",
    },
    {
      name: "Pizza Express Margherita",
      previousPrice: 9200,
      discountedPrice: 8200,
      description:
        "A classic Italian pizza with a thin crust, fresh mozzarella, sliced tomatoes, and fragrant basil.",
    },
    {
      name: "Kentucky Fried Chicken (KFC)",
      previousPrice: 15800,
      discountedPrice: 12400,
      description:
        "A globally recognized fast-food chain famous for its signature crispy and flavorful fried chicken, seasoned with a secret blend of herbs and spices",
    },
    {
      name: "Chelsea Buns",
      previousPrice: 7200,
      discountedPrice: 4600,
      description:
        " Soft, sweet, and sticky pastry buns filled with a delightful combination of cinnamon, sugar, and raisins, often topped with a sticky glaze or icing, originating from the Chelsea neighborhood in London.",
    },
    {
      name: "Tunisian Lamb Soup",
      previousPrice: 25000,
      discountedPrice: 18000,
      description:
        "A hearty and aromatic soup from Tunisia, typically made with tender lamb, vegetables, and a blend of North African spices such as cumin, coriander, and harissa, resulting in a rich and flavorful broth.",
    },
  ];

  return (
    <div className="menu" id="menu">
      <div className="menu-wrapper">
        <h1 className="menu__heading">Menu</h1>

        {menu.map((item) => {
          return (
            <div className="menu__item" key={item.name}>
              <div className="menu__item--main">
                <h4>{item.name}</h4>
                <h5>
                  <span>₦{item.previousPrice.toLocaleString()}</span>₦
                  {item.discountedPrice.toLocaleString()}
                </h5>
              </div>

              <p className="menu__item--sub">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
