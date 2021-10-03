import StoreReducer from "./storereducer/storReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  AllStoreData: StoreReducer,
});

export default RootReducer;
