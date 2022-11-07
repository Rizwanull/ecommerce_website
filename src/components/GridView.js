import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ product }) => {
  if (product === undefined) {
    return <h1>Issue and we fix them in second !</h1>
  }
  return (
    <Wrapper className="section">
      <div className="container grid grid-three-column">
        {product.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 120rem;
  }
  .grid {
    gap: 3.2rem;
  }
  figure {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: auto;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      position: absolute;
      width: 0%;
      height: 100%;
      top: 0;
      left: 0;
      content: "";
      transition: all 0.2s linear;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.5);
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      height: 20rem;
      margin-top: 1.5rem;
      transition: all 0.2s linear;
    }
  }
  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    .card-data {
      padding: 0 1.2rem;
    }
    .card-data-flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 2rem 0;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    h3 {
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
export default GridView;
