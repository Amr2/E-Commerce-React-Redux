import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "./components/shared/loading/loading";
import { StoreData } from "./features/Reducers/storereducer/StoreAction";
import {
  Remove_Product,
  Add_Product,
} from "./features/Reducers/cartreducer/CartActions";

function App() {
  const dispatcher = useDispatch();
  const { Products } = useSelector((state) => state.AllStoreData);
  const UserCart = useSelector((state) => state.User_Cart);
  useEffect(() => {
    dispatcher(StoreData());
  }, [dispatcher]);
  return (
    <div className="App">
      <h1>{UserCart.total}$</h1>
      {Products.length === 0 ? (
        <Loading />
      ) : (
        Products.map((p) => (
          <div key={p.id}>
            <p style={{ display: "inline-block" }}>{p.title}</p>
            <button
              onClick={() =>
                dispatcher(
                  Add_Product({ productId: p.id, quantity: 1, price: p.price })
                )
              }
            >
              +
            </button>
            <button
              onClick={() =>
                dispatcher(
                  Remove_Product({
                    productId: p.id,
                    quantity: 1,
                    price: p.price,
                  })
                )
              }
            >
              -
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
