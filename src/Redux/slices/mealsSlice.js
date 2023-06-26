import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { generateRandomPrice } from "../../Helpers/Functions";

const initialState = {
  randomMeal: [],
  error: "",
  isSearchClicked: false,
};

export const randomMeal = createAsyncThunk(
  "meals/randomMeal",
  async (_, thunk) => {
    try {
      const result = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );

      const meal = result.data.meals[0];

      meal.strPrice = generateRandomPrice();

      thunk.dispatch(setRandomMeal(result.data.meals));

      return "success";
    } catch (error) {
      throw new Error("Unable to get meal");
    }
  }
);

export const searchMeal = createAsyncThunk(
  "meals/searchMeal",
  async (name, thunk) => {
    try {
      const result = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      );

      const meals = result.data.meals.map((meal) => {
        return { ...meal, strPrice: generateRandomPrice() };
      });

      return meals;
    } catch (error) {
      console.log({ error });
      throw new Error("Unable to get meal");
    }
  }
);

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    setIsSearchClicked: (state, action) => {
      return {
        ...state,
        isSearchClicked: action.payload,
      };
    },

    setRandomMeal: (state, action) => {
      return {
        ...state,
        randomMeal: action.payload,
        error: "",
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(randomMeal.rejected, (state, action) => {
      return {
        ...state,
        error: "Unable to get meal",
      };
    });
  },
});

export const { setIsSearchClicked, setRandomMeal } = mealsSlice.actions;

export default mealsSlice.reducer;
