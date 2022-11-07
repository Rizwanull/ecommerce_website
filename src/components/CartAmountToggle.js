import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styled from "styled-components";
const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <Wrapper>
      <div className="amount">
        <div className="amount-quantity">
          <h3>{amount}</h3>
        </div>
        <div className="amount-toggle">
          <button onClick={() => setIncrease()}>
            <BsChevronUp className="icons" />
          </button>
          <button onClick={() => setDecrease()}>
            <BsChevronDown />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .amount {
    margin: 1.4rem 0;
    display: flex;
    padding: 0 1.9rem;
    border-radius: 30px;
    border: 1px solid;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.bg};
    .amount-quantity {
      h3 {
        color: ${({ theme }) => theme.colors.text};
        font-size: 3rem;
      }
    }
    .amount-toggle {
      align-self: center;
      display: flex;
      flex-direction: column;
    }
  }
  button {
    outline: none;
    border: none;
    background: none;
  }
`;
export default CartAmountToggle;
