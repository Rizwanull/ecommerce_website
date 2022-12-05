import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";


const CartItemAmount = ({ productInCart, setDecrease, setIncrease }) => {
  return (
    <Wrapper>
      <div className="toggle_amount">
        <button onClick={() => setDecrease()}>
        
          <FaMinus />  
        </button>
        <div className="cart-amount">
          <p>{productInCart}</p>
        </div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
.toggle_amount{
  display: flex;
  
  align-items: center;
  justify-content: center;
  button{
    border: none;
    padding:0 1.5rem;
    background: none;
    cursor: pointer;
  }
}
`
export default CartItemAmount;
