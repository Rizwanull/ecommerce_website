import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb';
import styled from 'styled-components';
import { MdSecurity } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiSecurePaymentLine } from 'react-icons/ri';
const Services = () => {
    return <Wrapper>
        <div className="container">
        <div className="grid grid-three-column">
            <div className="services-1">
                <TbTruckDelivery className='icon' />
                <h3>super fast and free delivery</h3>
            </div>
            <div className="services-2">
                <div className="services-row-2">
                    <MdSecurity className='icon' />
                    <h3>Non-contact shipping</h3>
                </div>
                <div className="services-row-2">
                    <GiReceiveMoney className='icon' />
                    <h3>Money-back guaranted</h3>
                </div>
            </div>
            <div className="services-3">
                <RiSecurePaymentLine className='icon' />
                <h3>super secure payment system</h3>
            </div>
            </div>
            </div>
  </Wrapper>
}
const Wrapper = styled.section`
  padding: 9rem 0;
  .grid {
    gap: 4.8rem;
  }
  .services-1,
  .services-2,
  .services-3 {
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: auto;
    height: 30rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    border-radius: 2rem;
    align-content: center;
  }
  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;
    .services-row-2 {
      display: flex;
      flex: 1;
      justify-content: center;
      align-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.bg};
      border-radius: 2rem;
      width: 40rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      /* height: 10rem; */
    }
  }

  .icon {
    /* font-size: 5rem; */
    color: ${({ theme }) => theme.colors.helper};
    background-color: #fff;
    padding: 2rem;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    transition: all 0.8s;
    cursor: pointer;
  }
  .icon:hover {
    transform: scale(1.1);
    color: black;
    background-color:rgba(232,232,220,0.5); 
  }

  h3 {
    margin: 1.4rem;
    font-size: 2rem;
    /* font-weight: bold; */
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .services-2 {
      .services-row-2 {
        width: 100%;
      }
    }
    h3 {
      font-weight: bold;
    }
  }
`;

export default Services
