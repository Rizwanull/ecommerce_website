import React from 'react'
import styled from 'styled-components';
import { useProductContext } from '../context/productcontext';
import Product from './Product';

const FeatureProduct = () => {
    const { isLoading, featureProducts } = useProductContext();
    // console.log("🚀 ~ file: FeatureProduct.js ~ line 6 ~ FeatureProduct ~ featureProducts", featureProducts)
    if(isLoading)return <h2>Loading ......</h2>
  return (
      <>
          <Wrapper className='section'>
              <div className="container">
                  <div className="intro-data">check now!</div>
                  <div className="common-heading">our feature services</div>
                  <div className="grid grid-three-column">
                      {
                          featureProducts.map((curElem) => {
                              return <Product key={curElem.id} {...curElem} />
                          })
                      }
                  </div>

              </div>
          </Wrapper>
      </>
  )
}
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 120rem;
  }
  figure {
    width: auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all 0.5s linear;
    &::after {
      content: "";
      top: 0;
      left: 0;
      position: absolute;
      width: 0%;
      height: 100%;
      /* background-color: rgba(232, 232, 22, 0.5); */
      background-color: rgba(0,0,0,0.5);
      cursor: pointer;
      transition: all 0.2s linear;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
    .caption {
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.text};
      font-weight: bold;
    }
  }
  .card {
    background-color: #fff;
    border-radius: 1rem;
    .card-data {
      padding: 0 2rem;
    }
    .card-data-flex {
      display: flex;
      justify-content: space-between;
      margin: 2rem 0;
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .card {
        margin: auto;
      width: 40%;
      .card-data {
        padding: 0 7rem;
      }
      
    }
    .container{text-align:center;}
  }
  @media (max-width:425px){
    .card{
        width: 70%;
        .card-data{
            padding: 0 2rem;
        }
    }
  }
`;
export default FeatureProduct