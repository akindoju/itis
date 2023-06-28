import React, { useEffect, useRef, useState } from "react";
import "./SearchModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { setRandomMeal, searchMeal } from "../../Redux/slices/mealsSlice";
import { addToCart, removeFromCart } from "../../Redux/slices/cartSlice";

const SearchItem = ({ name, price, img, id }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const [isUpdated, setIsUpdated] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const inCart = cartItems.find((meal) => {
    return meal.id === id;
  });

  const startTimer = () => {
    if (setIsUpdated) {
      setIsUpdated(true);

      setTimeoutId(
        setTimeout(() => {
          setIsUpdated(false);
        }, 2000)
      );

      return () => clearTimeout(timeoutId);
    }
  };

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
              ₦{price?.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <p className="search__result--item-prompt">
        {isUpdated ? "Cart Updated" : ""}
      </p>

      {inCart ? (
        <div className="search__result--item-details-btns">
          <button
            onClick={() => {
              if (inCart.quantity === 1) {
                dispatch(removeFromCart(id));
              } else {
                dispatch(
                  addToCart({
                    meal: {
                      id,
                    },
                    status: "remove",
                  })
                );
              }

              clearTimeout(timeoutId);
              startTimer();
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
                addToCart({
                  meal: {
                    id,
                  },
                  status: "add",
                })
              );
              clearTimeout(timeoutId);
              startTimer();
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
          onClick={() => {
            dispatch(
              addToCart({
                meal: { name, img, price, quantity: 1, id },
                status: "add",
              })
            );

            setIsUpdated(true);

            const timeout = setTimeout(() => {
              setIsUpdated(false);
            }, 2000);

            return () => clearTimeout(timeout);
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

const SearchModal = ({ setIsSearchClicked, searchIconRef }) => {
  const randomMeal = useSelector((state) => state.meals.randomMeal);

  const wrapperRef = useRef(null);
  const [searchArray, setSearchArray] = useState([]);
  const [searchValue, setSearchValue] = useState(
    randomMeal && randomMeal.length ? randomMeal[0].strMeal : ""
  );
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();

  const hideSearch = () => {
    dispatch(setRandomMeal([]));
    dispatch(setIsSearchClicked(false));
  };

  useEffect(() => {
    setSearchArray([...randomMeal]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="search-overlay">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="close-modal"
        onClick={() => {
          hideSearch();
        }}
      >
        <title>close</title>
        <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
      </svg>

      <div className="search" ref={wrapperRef}>
        <form
          onSubmit={async (e) => {
            setIsError(false);
            setSearchArray([]);
            e.preventDefault();
            const meals = await dispatch(searchMeal(searchValue));

            if (meals.payload && meals.payload.length) {
              setSearchArray([...meals.payload]);
            } else if (meals.error && meals.error.message) {
              setIsError(true);
            }
          }}
        >
          <input
            placeholder="Search meal"
            value={searchValue}
            onChange={({ target }) => {
              setSearchValue(target.value);
            }}
          />
          <button type="submit">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>search</title>
              <path d="M9.516 14.016q1.875 0 3.188-1.313t1.313-3.188-1.313-3.188-3.188-1.313-3.188 1.313-1.313 3.188 1.313 3.188 3.188 1.313zM15.516 14.016l4.969 4.969-1.5 1.5-4.969-4.969v-0.797l-0.281-0.281q-1.781 1.547-4.219 1.547-2.719 0-4.617-1.875t-1.898-4.594 1.898-4.617 4.617-1.898 4.594 1.898 1.875 4.617q0 0.984-0.469 2.227t-1.078 1.992l0.281 0.281h0.797z"></path>
            </svg>
          </button>
        </form>

        {searchArray.length ? (
          <div className="search__result">
            {searchArray.map((item) => {
              return (
                <SearchItem
                  name={item.strMeal}
                  img={item.strMealThumb}
                  price={item.strPrice}
                  key={item.idMeal}
                  id={item.idMeal}
                />
              );
            })}
          </div>
        ) : isError ? (
          <p className="search__error">
            Oops! Meal not found. Please try another search.
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default SearchModal;
