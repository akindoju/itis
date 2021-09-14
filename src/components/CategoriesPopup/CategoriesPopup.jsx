import { useRef } from "react";
import useOutsideAlerter from "../OutsideAlerter/useOutsideAlerter";
import "./CategoriesPopup.scss";

const CategoriesPopup = ({
  categoriesRef,
  isCategoriesClicked,
  setIsCategoriesClicked,
}) => {
  const wrapperRef = useRef(null);

  const hideCategoriesPopup = () => {
    setIsCategoriesClicked(!isCategoriesClicked);
  };

  useOutsideAlerter(wrapperRef, hideCategoriesPopup, categoriesRef);

  return (
    <div className="categoriesPopup" ref={wrapperRef}>
      <div className="variety">
        <div className="variety__item">
          <h4>Pizza</h4>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/319/711/651/pizza-vegetables-cheese-piece-wallpaper-preview.jpg"
            alt="food 1"
          />
        </div>

        <div className="variety__item">
          <h4>Cupcakes</h4>
          <img
            src="https://images.unsplash.com/photo-1585665187093-a3511c2fe57a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=583&q=80"
            alt="food 1"
          />
        </div>

        <div className="variety__item">
          <h4>Fries</h4>
          <img
            src="https://images.unsplash.com/photo-1608219994488-cc269412b3e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="food 1"
          />
        </div>

        <div className="variety__item">
          <h4>Chicken</h4>
          <img
            src="https://images.unsplash.com/photo-1608039755401-742074f0548d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
            alt="food 1"
          />
        </div>
      </div>

      <div className="bestSeller">
        <h1 className="bestSeller__heading">Best Seller</h1>

        <div className="bestSeller__content">
          <div className="bestSeller__content--item">
            <img
              src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="Best Seller 1"
            />
            <h1>Bucatini Pasta</h1>
            <h4>₦90,000</h4>
          </div>

          <div className="bestSeller__content--item">
            <img
              src="https://images.unsplash.com/photo-1600490036275-35f5f1656861?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt="Best Seller 1"
            />
            <h1>Chilli Noodles</h1>
            <h4>₦82,000</h4>
          </div>

          <div className="bestSeller__content--item">
            <img
              src="https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=352&q=80"
              alt="Best Seller 1"
            />
            <h1>Smoothies</h1>
            <h4>₦36,000</h4>
          </div>

          <div className="bestSeller__content--item">
            <img
              src="https://images.unsplash.com/photo-1601291888371-bcf5759bae4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=365&q=80"
              alt="Best Seller 1"
            />
            <h1>Aromatic Fruits</h1>
            <h4>₦78,000</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPopup;
