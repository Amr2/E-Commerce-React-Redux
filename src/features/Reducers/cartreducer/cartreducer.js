import { v4 } from "uuid";

const InitState = {
  Id: v4,
  GustUser: true,
  userId: 0,
  products: [],
  date: new Date().toJSON(),
  total: 0.0,
};

const CartReducer = (state = InitState, action) => {
  switch (action.type) {
    case "ADD_Product":
      const Add_temp_products =
        state.products.filter((p) => p.productId === action.payload.productId)
          .length > 0
          ? state.products.map((p) =>
              p.productId === action.payload.productId
                ? { ...p, quantity: p.quantity + action.payload.quantity }
                : { ...p }
            )
          : [...state.products, action.payload];

      return {
        ...state,
        products: Add_temp_products,
        date: new Date().toJSON(),
        total: state.total + action.payload.price * action.payload.quantity,
      };

    case "REMOVE_PRODUCT":
      const Remove_temp_products =
        state.products.filter(
          (p) =>
            p.productId === action.payload.productId &&
            p.quantity - action.payload.quantity > 0
        ).length > 0
          ? [
              ...state.products.map((p) =>
                p.productId === action.payload.productId
                  ? { ...p, quantity: p.quantity - action.payload.quantity }
                  : { ...p }
              ),
            ]
          : [
              ...state.products.filter(
                (p) => p.productId !== action.payload.productId
              ),
            ];

      const Totel_temp =
        Remove_temp_products.length > 0
          ? Remove_temp_products.map((p) => p.quantity * p.price).reduce(
              (x, y) => x + y
            )
          : 0;

      return {
        ...state,
        date: new Date().toJSON(),
        products: Remove_temp_products,
        total: Totel_temp,
      };

    default:
      return { ...state };
  }
};

export default CartReducer;
