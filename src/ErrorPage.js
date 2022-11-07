import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './styles/Button';

const ErrorPage = () => {
  return (
    <Wrapper>
      <h2>404</h2>
      <h3>UH OH! You're lost.</h3>
      <p>
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back to the homepage.
      </p>
      <Button>
        <NavLink to='/'>
        Back To Home

        </NavLink>
      </Button>
    </Wrapper>
  );
}
const Wrapper = styled.section`
padding:9rem 0;
text-align: center;
h2{
  font-size: 10rem;
}
h3{
  font-size: 4.2rem;
}
p{
  margin: 2rem;
  padding: 0 60rem;
}
@media (max-width:${({ theme }) => theme.media.mobile}){
  p{
    padding: 0 0 !important;
  }
}
@media (max-width:998px){
  p{
    padding: 0 16rem;
  }
}
@media (max-width:1500px){
  p{
    padding: 0 20rem;
  }
}
`;
export default ErrorPage
