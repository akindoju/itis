import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "itis",
  storage,
};

const rootReducer = combineReducers({
  cart: cartSlice,
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middleware.push(logger);
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store);
