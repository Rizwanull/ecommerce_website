import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
const Header = () => {
  return (
      <MainHeader>
          <NavLink to='/'>
              <img className='logo' src="/images/logoR.png" alt="logo" />
          </NavLink>
          <Nav />
    </MainHeader>
  )
}
const MainHeader = styled.header`
padding: 0 4.8rem;
height: 7rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
.logo{
    height: 4rem;
}
`;
export default Header
