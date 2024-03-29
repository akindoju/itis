import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import mealsSlice from "./slices/mealsSlice";

const persistConfig = {
  key: "itis",
  storage,
};

const rootReducer = combineReducers({
  user: userSlice,
  meals: mealsSlice,
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
