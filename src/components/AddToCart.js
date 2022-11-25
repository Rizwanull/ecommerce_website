import React from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
import { useCartContext } from '../context/Cart_Context';
const AddToCart = ({ product }) => {
  
  //add to cart work
  const { addToCart } = useCartContext();

  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color You want:
          {colors.map((curColors, index) => {
            return (
              <button
                onClick={() => setColor(curColors)}
                className={color === curColors ? "btnStyle active" : "btnStyle"}
                style={{ backgroundColor: curColors }}
                key={index}
                title={curColors}
              >
                {color === curColors ? (
                  <FaCheck className="checkStyle" />
                ) : null}
              </button>
            );
          })}
        </p>
      </div>
      {/* Add to cart  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <NavLink to="/cart" onClick={() => addToCart(id, amount, color, product)}>
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    margin-left: 1rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1.3rem;
    color: #fff;
    display: flex;
    margin: auto;
  }
`;
export default AddToCart;
