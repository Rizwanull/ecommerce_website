import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from '../helpers/FormatPrice';
import { Button } from '../styles/Button';
const ListView = ({ product }) => {
   if (product === undefined) {
     return <h1>Click of type sort!</h1>;
   }
  return (
    <Wrapper className="section">
      <div className="container grid">
        {product.map((curElem) => {
          const { id, image,name, description, price } = curElem;
          return (
            <div className="card grid grid-two-column" key={curElem.id}>
              <Link to={`/singleproducts/${id}`}>
              <figure>
                <img src={image} alt={name} />
                </figure>
                </Link>
              <div className="card-data">
                <h3>{name}</h3>
                <p className='price'>
                  <FormatPrice price={price} />
                </p>
                <p>{description.slice(0, 98)}......</p>
                
                <NavLink to={`/singleproducts/${id}`} className="btn-main">
                  <Button className='btn'>Read More</Button>
                </NavLink>
              </div>
            </div>
          )
        })}
</div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 120rem;
  }
  .grid {
    gap: 3.2rem;
  }
  figure {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: all 0.5s linear;
    padding: 1rem 0;
    &::after {
      cursor: pointer;
      width: 0%;
      content: "";
      background-color: rgba(0, 0, 0, 0.5);
      height: 100%;
      position: absolute;
      transition: all 0.2s linear;
      top: 0;
      left: 0;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.5);
    }
    img {
      max-width: 90%;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  .card {
    border: 0.1rem solid rgb(170 170 170/40%);
    .card-data {
      padding: 1rem 2rem;
    }
    h3 {
      margin: 2rem 0;
      font-size: 2.4rem;
      font-weight: 400;
      text-transform: capitalize;
    }
    .price {
      color: ${({ theme }) => theme.colors.helper};
      text-decoration: underline;
      margin-bottom: 0.4rem;
    }
    .btn {
      margin: 1.5rem 0;
      background-color: rgb(0 0 0 / 0%);
      display: flex;
      border: 0.1rem solid rgb(98 84 243);
      color: rgb(98 84 243);
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
    
  }
`;

export default ListView