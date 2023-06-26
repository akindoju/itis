import React, { useEffect, useRef, useState } from "react";
import "./SearchModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { setRandomMeal } from "../../Redux/slices/mealsSlice";

const SearchItem = ({ name, price, img }) => {
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
              ₦{price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <button className="search__result--item-cart">Add to Cart</button>
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

  const dispatch = useDispatch();

  const hideSearch = () => {
    dispatch(setRandomMeal([]));
    dispatch(setIsSearchClicked(false));
  };

  // useOutsideAlerter(wrapperRef, hideSearch, searchIconRef);

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
        <title>Close</title>
        <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
      </svg>

      <div className="search" ref={wrapperRef}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
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
              <title>search1</title>
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
                  key={item.strMeal}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchModal;
