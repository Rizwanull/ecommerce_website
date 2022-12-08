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
  total_price: "",
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

//  to clear(delete) all items from cart 
  const clearCart = () => {
    dispatch({type:"CLEAR_CART"})
  }

  // to set increment and decrement in cart page
  const setDecrement = (id) => {
  dispatch({type:"SET_DECREMENT",payload:id})
}
  
  const setIncrement = (id) => {
    dispatch({type:'SET_INCREMENT',payload:id})
  }
// end setIncrement and setDecrement
  
  
  //  to save and set data in localStorage 
  useEffect(() => {
    /* ***************************    we comment this two dispatch because we simplifies the code 
    //for to get total item number in cart (trolly) we call dispatch
    dispatch({ type: "CART_TOTAL_ITEM" });
    // for to get subtotal price amount of all cart item 
    dispatch({ type: 'SUB_TOTAL_PRICE' });
    ************************************************/
    
    /****************simplifies code of above two dispatch */
    dispatch({ type: "CART_TOTAL_ITEM_PRICE" });

    localStorage.setItem("shoppingCart", JSON.stringify(state.cart));
  },[state.cart])
  return (
    <CartContext.Provider value={{ ...state, addToCart,removeCartItem,clearCart,setDecrement,setIncrement }}>
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
