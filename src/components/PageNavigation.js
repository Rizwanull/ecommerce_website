import React from 'react'
import {Link } from 'react-router-dom';
import styled from 'styled-components'

const PageNavigation = ({title}) => {
  return (
      <Wrapper>
          <Link to="/">Home</Link> / {title}
    </Wrapper>
  )
}
const Wrapper = styled.section`
background-color:${({ theme }) => theme.colors.bg} ;
height: 10rem;
display: flex;
align-items: center;
justify-content: flex-start;
padding-left: 5.2rem;
font-size: 3.2rem;
`;
export default PageNavigation