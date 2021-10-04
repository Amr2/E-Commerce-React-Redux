export const Add_Product = (cart_product) => (dispatch) => {
  return dispatch({
    type: "ADD_Product",
    payload: cart_product,
  });
};

export const Remove_Product = (cart_product) => (dispatch) => {
  return dispatch({
    type: "REMOVE_PRODUCT",
    payload: cart_product,
  });
};
