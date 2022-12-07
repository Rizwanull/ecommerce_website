// import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/Cart_Context';
import FormatPrice from '../helpers/FormatPrice';
import CartItemAmount from './CartItemAmount';
const CartItem = ({ id, name, image, price, color, amount, max }) => {
  const { removeCartItem,setDecrement,setIncrement } = useCartContext();

  /* one way of to do increment and decrement item in cart 
  and second way setDecrement and setIncrement is from cart_context and define in cart reducer



    const [productInCart, setProductInCart] = useState(amount);
    const setDecrease = () => {
      productInCart > 1 ? setProductInCart(productInCart - 1) : setProductInCart(1);
      
      // return {
      //   price: price * productInCart
      // }
      
     }
    const setIncrease = () => {
        productInCart < max ? setProductInCart(productInCart + 1) : setProductInCart(max);
    }
    */
   
    return (
      <div className="card-heading grid grid-five-column">
        {/* image,name,and color  */}
        <div className="cart-image--name">
          <div>
            <figure>
              <img src={image} alt={id} />
            </figure>
          </div>
          <div>
            <p>{name}</p>
            <div className="color-div">
              <p>Color:</p>
              <div
                className="color-style"
                style={{ backgroundColor: color, color: color }}
              ></div>
            </div>
          </div>
        </div>
        {/* price  */}
        <div className="cart-hide">
          <p>
            <FormatPrice price={price} />
          </p>
        </div>
        {/* Quantity */}
        <CartItemAmount
          setDecrease={()=>setDecrement(id)}
          setIncrease={()=>setIncrement(id)}
          productInCart={amount}
        />
        <div className="cart-hide">
          <p>
            <FormatPrice price={price * amount} />
          </p>
        </div>
        <div>
          <FaTrash onClick={() => removeCartItem(id)} className="remove_icon" />
        </div>
      </div>
    );
}

export default CartItem