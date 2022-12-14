// import React from 'react'

const CartReducer = (state, action) => {
  // for to add product in cart
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log("🚀 ~ file: CartReducer.js ~ line 6 ~ CartReducer ~ product", product);

    /*when we add product we check this is not already available of same id and color
    if available then only we increment the quantity of same product not to add in list */
    let existingProduct;
    existingProduct = state.cart.find((curItem) => curItem.id === id + color);
    // console.log(
    //   "🚀 ~ file: CartReducer.js:12 ~ CartReducer ~ existingProduct",
    //   existingProduct
    // );
    if (existingProduct) {
      let updateProductAmount = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newProductAmount = curElem.amount + amount;

          if (newProductAmount >= curElem.max) {
            newProductAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newProductAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updateProductAmount,
      };
    } else {
      // to add product in cart one by one

      let cartProduct;
      cartProduct = {
        id: id + color, //to make unique id
        color,
        amount,
        image: product.image[0].url,
        name: product.name,
        price: product.price,

        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
  /****************** * for to set increment and decrement in cart page************/
  if (action.type === "SET_DECREMENT") {
    let updatedProductQuantity = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        // console.log(curElem);
        let decAmount = curElem.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProductQuantity,
    };
  }
  if (action.type === "SET_INCREMENT") {
    let updatedProductQuantity = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;
        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProductQuantity,
    };
  }
  /*********************end increment and decrement ************************/

  /**********************for to delete the product from cart**************/
  if (action.type === "REMOVE_CART_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    // console.log(
    //   "🚀 ~ file: CartReducer.js:30 ~ CartReducer ~ updatedCart",
    //   updatedCart
    // );
    return {
      ...state,
      cart: updatedCart,
    };
  }
  /*****************to clear(delete) all items from cart ***************/
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  /*** this two function is going to commented because we simplifies the code of to get 
   total_item and total_price from my cart in one action.type rather than two separate functions*****   
  /**********************to update the total number of item in cart (trolley)***************
  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialValue, curElem) => {
      let { amount } = curElem;
      initialValue = initialValue + amount;
      return initialValue;
    }, 0);
    return {
      ...state,
      total_item: updatedItemVal,
    };
  }
  /*************for to get sub total price amount of all cart items ************************
  if (action.type === "SUB_TOTAL_PRICE") {
    let updatedSubTotal = state.cart.reduce((initialValue, curElem) => {
      let { price, amount } = curElem; //here the curElem means the cart
      initialValue = initialValue + price * amount;
      return initialValue;
    }, 0);
    return {
      ...state,
      total_price: updatedSubTotal,
    };
  }
  *********************** end this two function comment *******************************************/

  /**********************simplified code of cart sub totals and total price to calculate *****************/
  if (action.type === "CART_TOTAL_ITEM_PRICE") {
    let { total_item, total_price } = state.cart.reduce(
      (accumulator, curElem) => {
        let { price, amount } = curElem;
        accumulator.total_item += amount;
        accumulator.total_price += price * amount;
        return accumulator;
      },
      { total_item: 0, total_price: 0 }
    );
    return {
      ...state,
      total_item,
      total_price,
    };
  }
  /*****************************************    end simplified code  ******************************** */
  return state;
};

export default CartReducer;
