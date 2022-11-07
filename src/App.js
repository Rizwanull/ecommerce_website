import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./About";
import Home from "./Home";
import Products from './Products';
import Contact from './Contact';
import Cart from "./Cart";
import SingleProduct from './SingleProduct';
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const theme = {
    colors: {
      bg: "#F6F8FA",
      black: "#000",
      white: "#fff",
      text: "rgba(29 ,29, 29, .8)",
      helper: "#0E00FF",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba( 98, 84, 243,0.5)",
      hr: "#fff",
      gradient: "linear-gradient(0deg,rgb(132 144 25) 0%, rgb(98 189 252)100%)",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15)0px 0px 0px 1px",
      shadowSupport: "rgba(0,0,0,0.6) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
    return (
      <>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contactus" element={<Contact />} />
              <Route path="singleproducts/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </>
    );
};

export default App;
