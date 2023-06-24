import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  randomMeal: [],
  error: "",
  isSearchClicked: false,
};

export const surpriseMeal = createAsyncThunk(
  "meals/surpriseMeal",
  async (_, thunk) => {
    try {
      const result = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );

      thunk.dispatch(setRandomMeal(result.data.meals));

      return "success";
    } catch (error) {
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
    builder.addCase(surpriseMeal.rejected, (state, action) => {
      return {
        ...state,
        error: "Unable to get meal",
      };
    });
  },
});

export const { setIsSearchClicked, setRandomMeal } = mealsSlice.actions;

export default mealsSlice.reducer;
