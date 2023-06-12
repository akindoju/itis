import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  name: "",
  id: "",
  email: "",
};

export const register = createAsyncThunk(
  "user/createNewUser",
  async (payload) => {
    // const axios = AxiosOrders();
    //   const remoteData = store.getState().general.remoteData;
    //   const response = await axios
    //     .post(`${remoteData.BASE_URL}/newUser`, payload)
    //     .catch(error => {
    //       console.log({error});
    //     });
    //   return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserData: (state, action) => {
      return {
        ...state,
        userData: action.payload,
      };
    },
  },

  //   extraReducers: (builder) => {
  //     builder.addCase(
  //       updateFCMToken.fulfilled,
  //       (state, action: { payload: any }) => {
  //         const { fcmToken } = action.payload;

  //         return {
  //           ...state,
  //           userData: {
  //             ...state.userData,
  //             fcmToken,
  //           },
  //         };
  //       }
  //     );
  //   },
});

export const {
  setIsUpdateNeeded,
  setIsuserLoggedIn,
  updateUserData,
  logoutUserSlice,
} = userSlice.actions;

export default userSlice.reducer;
