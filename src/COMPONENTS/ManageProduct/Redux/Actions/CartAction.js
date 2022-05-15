export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADJUST_QTY_INCREMENT = "ADJUST_QTY_INCREMENT";
export const ADJUST_QTY_DECREMENT = "ADJUST_QTY_DECREMENT";


export const addToCart = (id, title, price, image) => {
  return { type: ADD_TO_CART, id, title, price, image };
};

export const removeFromCart = (cartId) => {
  return { type: REMOVE_FROM_CART, cartId };
};
export const Increment = () => {
  return { type: ADJUST_QTY_INCREMENT };
};
export const Decrement = () => {
  return { type: ADJUST_QTY_DECREMENT   };
};



