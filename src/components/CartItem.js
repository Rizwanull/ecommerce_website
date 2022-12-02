import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import FormatPrice from '../helpers/FormatPrice';
import CartItemAmount from './CartItemAmount';
const CartItem = ({ id, name, image, price, color, amount, max }) => {
    const [productInCart, setProductInCart] = useState(1);
    const setDecrease = () => {
        productInCart > 1 ? setProductInCart(productInCart - 1) : setProductInCart(1);
     }
    const setIncrease = () => {
        productInCart < max ? setProductInCart(productInCart + 1) : setProductInCart(max);
    }
   
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
          setDecrease={setDecrease}
          setIncrease={setIncrease}
          productInCart={productInCart}
        />
        <div className="cart-hide">
          <p>
            <FormatPrice price={price * amount} />
          </p>
        </div>
        <div>
          <FaTrash onClick={()=>removeCartItem(id)} className="remove_icon" />
        </div>
      </div>
    );
}

export default CartItem