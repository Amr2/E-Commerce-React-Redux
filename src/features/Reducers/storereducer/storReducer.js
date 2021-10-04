const InitState = {
  Carts: [],
  Users: [],
  Products: [],
};

const StoreReducer = (state = InitState, action) => {
  switch (action.type) {
    case "Get_All_Store_Data":
      return {
        ...state,
        Carts: action.payload.Carts,
        Users: action.payload.Users,
        Products: action.payload.Products,
      };
    default:
      return { ...state };
  }
};

export default StoreReducer;
