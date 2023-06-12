import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "affixdot",
  storage,
  blacklist: ["general"],
};

const rootReducer = combineReducers({
  // general: persistReducer(
  //   {
  //     key: 'general',
  //     storage: AsyncStorage,
  //     blacklist: ['pointsOptionsModal'],
  //   },
  //   generalSlice,
  // ),
  cart: cartSlice,
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware: any = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middleware.push(logger);
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;

export const persistor = persistStore(store);