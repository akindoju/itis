import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, where, getDocs, query } from "@firebase/firestore";
import { firestore } from "../../Firebase/firebase.utils";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { mealsLogout } from "./mealsSlice";
import { cartLogout } from "./cartSlice";

const initialState = {
  user: {},
  error: "",
  isLoggedIn: false,
};

export const register = createAsyncThunk("user/register", async (payload) => {
  const ref = collection(firestore, "users");

  const auth = getAuth();

  return createUserWithEmailAndPassword(auth, payload.email, payload.password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      await addDoc(ref, {
        fullName: payload.fullName,
        email: user.email,
        id: user.uid,
        created_at: new Date(),
      });

      return {
        user: {
          fullName: payload.fullName,
          email: user.email,
          id: user.uid,
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
            id: val.data().uid,
            created_at: val.data().created_at,
          };
        });

        return { user: user[0], message: "success" };
      });
    })
    .catch(() => {
      throw new Error("Unable to log in");
    });
});

export const logout = createAsyncThunk("user/logout", async (_, thunk) => {
  try {
    const auth = getAuth();

    await signOut(auth);
    thunk.dispatch(mealsLogout());
    thunk.dispatch(cartLogout());
  } catch (error) {
    throw new Error("Unable to Log out");
  }
});

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
      const { fullName, id, email, created_at } = action.payload.user;

      return {
        ...state,
        isLoggedIn: true,
        user: {
          fullName,
          id,
          email,
          created_at,
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
  },
});

export const { setIsUpdateNeeded, setIsuserLoggedIn, updateUserData } =
  userSlice.actions;

export default userSlice.reducer;
