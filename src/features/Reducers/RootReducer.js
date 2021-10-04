import StoreReducer from "./storereducer/storReducer";
import CartReducer from "./cartreducer/cartreducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  AllStoreData: StoreReducer,
  User_Cart: CartReducer,
});

export default RootReducer;
