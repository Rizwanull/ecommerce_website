import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../reducer/CartReducer";
const CartContext = createContext();

// for to get data from localStorage 
const getLocalCartData = () => {
  let localStorageData = localStorage.getItem("shoppingCart");
  if (localStorageData === []) {
    return [];
  }
  else {
    return JSON.parse(localStorageData);
  }
}
const initialState = {
  // cart: [],
  cart:getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //AddToCart function to get of this product data..
  const addToCart = (id, amount, color, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, amount, color, product },
    });
  };
  // to delete the cart added item if any i want
  const removeCartItem = (id) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: id });
  };

  //  to save and set data in localStorage 
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(state.cart));
  },[state.cart])
  return (
    <CartContext.Provider value={{ ...state, addToCart,removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
