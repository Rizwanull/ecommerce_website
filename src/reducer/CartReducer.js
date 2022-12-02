// import React from 'react'

const CartReducer = (state, action) => {

    // for to add product in cart 
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;
        // console.log("🚀 ~ file: CartReducer.js ~ line 6 ~ CartReducer ~ product", product)

        // to add product in cart 
        let cartProduct;
        cartProduct = {
            id: id + color, //to make unique id 
            color,
            amount,
            image: product.image[0].url,
            name: product.name,
            price: product.price,
            
            max:product.stock,
        }
        return {
            ...state,
            cart:[...state.cart,cartProduct]
        }
    }
    // for to delete the product from cart 
    if (action.type === "REMOVE_CART_ITEM") {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      console.log(
        "🚀 ~ file: CartReducer.js:30 ~ CartReducer ~ updatedCart",
        updatedCart
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
    return state;
}

export default CartReducer