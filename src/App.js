import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { StoreData } from "./features/Reducers/storereducer/StoreAction"
import { Remove_Product,Add_Product} from "./features/Reducers/cartreducer/CartActions"

function App() {
  const dispatcher = useDispatch(); 
  useEffect(()=>{
    dispatcher(StoreData())
    dispatcher(Add_Product({productId:5,quantity:2,price:2.5}))
    dispatcher(Add_Product({productId:5,quantity:2,price:2.5}))
    dispatcher(Remove_Product({productId:5,quantity:2,price:2.5}))
    dispatcher(Remove_Product({productId:5,quantity:2,price:2.5}))
    dispatcher(Remove_Product({productId:5,quantity:2,price:2.5}))
  },[dispatcher])
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
