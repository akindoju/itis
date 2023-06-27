import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, where, getDocs, query } from "@firebase/firestore";
import { firestore } from "../../Firebase/firebase.utils";
import { findWithAttr } from "../../Helpers/Functions";

const initialState = {
  cartItems: [],
};

export const uploadCart = createAsyncThunk(
  "cart/uploadCart",
  async (payload) => {
    const ref = collection(firestore, "cart");

    try {
      await addDoc(ref, {
        cart: payload.cart,
        uId: payload.user.id,
      });

      // return payload.cart;
    } catch (error) {}
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let cartArr = [...state.cartItems];

      const idx = findWithAttr(state.cartItems, "id", action.payload.meal.id);

      if (idx !== -1) {
        let mealItem = { ...cartArr[idx] };

        if (action.payload.status === "add") {
          cartArr[idx] = {
            ...mealItem,
            quantity: mealItem.quantity + 1,
          };
        } else if (action.payload.status === "remove") {
          mealItem = {
            ...mealItem,
            quantity: mealItem.quantity - 1,
          };
        }

        return {
          ...state,
          cartItems: cartArr,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload.meal],
        };
      }
    },

    cartLogout: () => {
      return initialState;
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(
  //     updateFCMToken.fulfilled,
  //     (state, action: { payload: any }) => {
  //       const { fcmToken } = action.payload;

  //       return {
  //         ...state,
  //         userData: {
  //           ...state.userData,
  //           fcmToken,
  //         },
  //       };
  //     }
  //   );
  // },
});

export const { addToCart, cartLogout } = cartSlice.actions;

export default cartSlice.reducer;
