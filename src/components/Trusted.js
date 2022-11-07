import React from 'react'
import styled from 'styled-components'

const Trusted = () => {
  return (
      <Wrapper className='brand-section'>
          <h3>Shop by 1000+ companies</h3>
          <div className="brand-section-slider">
              <div className="slide"><img  src='/images/brand_ziena.png' alt='Ziena'  /> </div>
              <div className="slide"> <img src="/images/brand_circle.png" alt="circle" /> </div>
              <div className="slide"> <img src="/images/brand_logic.png" alt="logic" /></div>
              <div className="slide"> <img src="/images/brand_heart.png" alt="heart" /> </div>
              <div className="slide"> <img src="/images/brand_chartz.png" alt="chartz" /> </div>
          </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 9rem 0;
background-color: ${({theme})=>theme.colors.bg};
.brand-section{
    padding: 12rem 0 0 0;
}
img{
    min-width: 10rem;
    height: 10rem;
}
h3{
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2.2rem;
    font-weight: bold;
}
.brand-section-slider{
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
@media (max-Width: ${({ theme }) => theme.media.mobile}){
    .brand-section-slider{
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
        
    }
    img{
        margin-bottom: 2rem;
    }
}
`;
export default Trusted