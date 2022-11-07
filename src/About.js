import React from 'react'
// import { useContext } from 'react'
import HeroSection from './components/HeroSection'
// import { AppContext } from './context/productcontext'
import { useProductContext } from './context/productcontext'
const About = () => {
  const data = {
    name:"Rizwan Ecommerce",
  }
  // const {myName} = useProductContext();
  // const myName = useContext(AppContext);
  return (
    <>
    {/* {myName} */}
    <HeroSection myData={data} />
    </>
  )
}


export default About
