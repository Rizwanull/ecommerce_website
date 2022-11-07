import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
const HeroSection = ({ myData }) => {
    const { name } = myData;
  return (
    <Wrapper>
          <div className="container">
              <div className="grid grid-two-column">
                  <div className="hero-section-data">
                      <p>Welcome To</p>
                      <h1>{name}</h1>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, cumque voluptates. Quibusdam eum nulla saepe quisquam porro odit blanditiis totam?</p>
                      <NavLink to='/products'>
                          <Button>Shop Now</Button>
                      </NavLink>
                  </div>
                  <div className="hero-section-image">
                      <figure>
                          <img src="images/hero.jpg" alt="hero-section-photo" className='img-style' />
                      </figure>
                  </div>
              </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 12rem 0;
img{
    min-width: 10rem;
    height: 10rem;
}
.hero-section-data{
    p{
        margin: 2rem 0;
    }
    h1{
        text-transform: capitalize;
        font-weight: bold;
        font-size: 5.3rem;
    }
}
.hero-section-image{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
figure{
    position: relative;
    &::after{
        content: '';
        width: 60%;
        height: 80%;
        position: absolute;
        background-color:rgba(81,56,238,0.8);
        left: 50%;
        top: -5rem;
        z-index: -1;
    }
}
.img-style{
    width: 100%;
    height: auto;
}

@media (max-width:${({ theme }) => theme.media.mobile}){
    .grid{
        gap: 10rem;
    }
    figure::after{
        content: '';
        width:50%;
        height: 50%;
        left: 52%;
        top: -2rem;

    }
}
`;
export default HeroSection
