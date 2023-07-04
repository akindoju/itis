import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  where,
  getDocs,
  query,
  updateDoc,
  doc,
} from "@firebase/firestore";
import { firestore } from "../../Firebase/firebase.utils";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { mealsLogout } from "./mealsSlice";
import { findWithAttr } from "../../Helpers/Functions";
// import { store } from "../store";

const initialState = {
  user: { myCart: [] },
  error: "",
  isLoggedIn: false,
};

export const register = createAsyncThunk("user/register", async (payload) => {
  const ref = collection(firestore, "users");

  const auth = getAuth();

  return createUserWithEmailAndPassword(auth, payload.email, payload.password)
    .then(async (userCredential) => {
      const response = userCredential.user;

      const user = await addDoc(ref, {
        fullName: payload.fullName,
        email: response.email,
        id: response.uid,
        created_at: new Date(),
      });

      await updateDoc(doc(firestore, "users", user.id), {
        id: user.id,
      });

      return {
        user: {
          fullName: payload.fullName,
          email: response.email,
          id: user.id,
          created_at: new Date(),
        },
        message: "success",
      };
    })
    .catch((error) => {
      throw error;
    });
});

export const login = createAsyncThunk("user/login", async (payload) => {
  const auth = getAuth();

  return await signInWithEmailAndPassword(auth, payload.email, payload.password)
    .then(async () => {
      const q = query(
        collection(firestore, "users"),
        where("email", "==", payload.email)
      );

      return await getDocs(q).then((data) => {
        const user = data.docs.map((val) => {
          return {
            fullName: val.data().fullName,
            email: val.data().email,
            id: val.id,
            created_at: val.data().created_at,
            myCart: val.data().myCart,
          };
        });

        if (user.length) {
          return { user: user[0], message: "success" };
        } else {
          throw new Error("Unable to log in");
        }
      });
    })
    .catch((error) => {
      throw new Error("Unable to log in");
    });
});

export const logout = createAsyncThunk("user/logout", async (_, thunk) => {
  try {
    const auth = getAuth();

    await signOut(auth);
    thunk.dispatch(mealsLogout());
  } catch (error) {
    throw new Error("Unable to Log out");
  }
});

export const updateCart = createAsyncThunk(
  "user/updateCart",
  async (payload, { getState }) => {
    try {
      const user = getState().user.user;

      let cartArr = [...user.myCart];

      const idx = findWithAttr(cartArr, "id", payload.meal.id);
      if (idx !== -1) {
        let mealItem = { ...cartArr[idx] };

        if (payload.status === "add") {
          cartArr[idx] = {
            ...mealItem,
            quantity: mealItem.quantity + 1,
          };
        } else if (payload.status === "remove") {
          if (cartArr[idx].quantity === 1) {
            cartArr = cartArr.filter((item) => {
              const meal = { ...item };
              return meal.id !== cartArr[idx].id;
            });
          } else {
            cartArr[idx] = {
              ...mealItem,
              quantity: mealItem.quantity - 1,
            };
          }
        }

        await updateDoc(doc(firestore, "users", user.id), {
          myCart: cartArr,
        });

        return { cartArr, message: "success" };
      } else {
        await updateDoc(doc(firestore, "users", user.id), {
          myCart: [...cartArr, payload.meal],
        });

        return { cartArr: [...cartArr, payload.meal], message: "success" };
      }
    } catch (error) {
      console.log({ error });
      throw new Error("Oops! Something went wrong");
    }
  }
);

export const updateAddress = createAsyncThunk(
  "user/updateAddress",
  async (payload, { getState, dispatch }) => {
    try {
      const user = getState().user.user;

      await updateDoc(doc(firestore, "users", user.id), {
        address: payload,
      });

      dispatch(updateUser({ ...user, address: payload }));
    } catch (error) {
      console.log({ error });
      throw new Error("Oops! Something went wrong");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(register.pending, () => {
      return initialState;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      const { fullName, id, email, created_at } = action.payload.user;

      return {
        ...state,
        isLoggedIn: true,
        user: {
          fullName,
          id,
          email,
          created_at,
          myCart: [],
        },
      };
    });

    builder.addCase(register.rejected, (state, action) => {
      const { error } = action;

      if (error && error.code === "auth/email-already-in-use") {
        return {
          ...state,
          error: "Email already in use",
        };
      } else {
        return {
          ...state,
          error: "Unable to register",
        };
      }
    });

    builder.addCase(login.pending, () => {
      return initialState;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      const { fullName, id, email, created_at, myCart } = action.payload.user;

      return {
        ...state,
        isLoggedIn: true,
        user: {
          fullName,
          id,
          email,
          created_at,
          myCart,
        },
      };
    });

    builder.addCase(login.rejected, (state) => {
      return {
        ...state,
        error: "Unable to log in",
      };
    });

    builder.addCase(logout.fulfilled, () => {
      return initialState;
    });

    builder.addCase(logout.rejected, (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    });

    builder.addCase(updateCart.fulfilled, (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          myCart: action.payload.cartArr,
        },
      };
    });
  },
});

export const { setIsuserLoggedIn, updateUser } = userSlice.actions;

export default userSlice.reducer;
