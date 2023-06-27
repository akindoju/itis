import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, where, getDocs, query } from "@firebase/firestore";
import { firestore } from "../../Firebase/firebase.utils";

const initialState = {
  cartItems: [],
};

export const updateCart = createAsyncThunk(
  "cart/updateCart",
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
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
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
