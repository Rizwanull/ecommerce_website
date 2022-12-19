import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../context/Cart_Context";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../styles/Button";
const Nav = () => {
  /************  for to login/logout *****************/
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  /*********************end login/logout******* */

  const [menuIcon, setMenuIcon] = useState(false);
  const { total_item } = useCartContext();
  return (
    <NAV>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
              to="/contactus"
            >
              Contact US
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
              to="/about"
            >
              About US
            </NavLink>
          </li>
          {isAuthenticated ? (
            <li>
              <Button
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </Button>
            </li>
          ) : (
            <li>
              <Button onClick={() => loginWithRedirect()}>Log In</Button>
            </li>
          )}

          <li>
            <NavLink
              className="navbar-link cart-trolley--link"
              onClick={() => setMenuIcon(false)}
              to="/cart"
            >
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
        </ul>
        <div className="mobile-nav-btn">
          <CgMenu
            onClick={() => setMenuIcon(true)}
            className="mobile-nav-icon"
            name="menu-outline"
          />
          <CgClose
            onClick={() => setMenuIcon(false)}
            className="mobile-nav-icon close-outline"
            name="close-outline"
          />
        </div>
      </div>
    </NAV>
  );
};
const NAV = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;
    align-items: center;
    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
    .cart-trolley--link {
      position: relative;
      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }
      .cart-total--item {
        position: absolute;
        width: 2.4rem;
        height: 2.4rem;
        background-color: ${({ theme }) => theme.colors.helper};
        color: #fff;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        align-items: center;
        text-align: center;
        left: 80%;
      }
    }
  }
  .mobile-nav-btn {
    display: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }
  .close-outline {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-nav-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};
      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
        top: 20%;
        right: 10%;
        position: absolute;
      }
    }
    .navbar-list {
      width: 100vw;
      height: 100vh;
      /* height: 100vh; */
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      /* transform-origin: top; */
      transition: all 3s linear;

      .cart-trolley--link {
        .cart-total--item {
          width: 3.4rem;
          height: 3.4rem;
        }
      }
    }
    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      height: 100vh !important;
      margin-top: 50px;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      transition: all 2s linear;
      .navbar-link {
        font-size: 3rem;
      }
    }

    .active .mobile-nav-icon {
      display: none;
      position: absolute;
    }
    .active .close-outline {
      display: inline-block;
    }
  }
`;
export default Nav;
