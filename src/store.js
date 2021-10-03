import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {RootReducer} from "./features/"
export const configureAppStore = () => {
  const store = configureStore({
    reducer: RootReducer,
    middleware: [...getDefaultMiddleware({serializableCheck:false})],
  });
  // if (process.env.NODE_ENV !== "production" && module.hot) {
  //   module.hot.accept("./reducers", () => store.replaceReducer({}));
  // }
  return store;
};
