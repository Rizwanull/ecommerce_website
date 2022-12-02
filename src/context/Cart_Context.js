import { createContext, useReducer, useContext } from "react";
import reducer from "../reducer/CartReducer";
const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //Addtocart function to get of this product data..
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
