import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <Wrapper>
      <section className="footer-outer ">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started ?</h3>
            <h3>talk to us today</h3>
          </div>
          <div className="get-started">
            <Button>get started</Button>
          </div>
        </div>
      </section>
      {/* main footer  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Rizwan Store</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vel
              harum id. Possimus dolor optio beatae doloremque placeat
              consectetur commodi.
            </p>
          </div>
          <div className="footer-subscribe">
            <h3>subscribe to get important updates</h3>
            <form action="#">
              <input type="email" required placeholder="your E-mail" />
              <input type="submit" value="subscribe" />
            </form>
          </div>
          <div className="footer-social">
            <h3>follow us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaYoutube className="icons" />
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>call us</h3>
            <h3>+92 3336938069</h3>
          </div>
        </div>
        {/*************** *bottom footer ************************/}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
                      <p>@ {new Date().getFullYear()} Rizwan. All Right Reserved</p>
                      <div>
                          <p>privacy  policy</p>
                          <p>terms & conditions</p>
                      </div>
          </div>
        </div>
   
        {/* ***************** end bottom footer *********************** */}
      </footer>
      {/* end main footer */}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0 0 0;

  .footer-outer {
    padding: 5rem 10rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.bg};
    max-width: 60vw;
    margin: auto;
    transform: translateY(50%);
    .grid div:last-child {
      align-self: center;
      justify-self: end;
    }
  }
  footer {
    padding: 14rem 0 0 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
      text-transform: capitalize;
      font-size: 2rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          position: relative;
          font-size: 2.4rem;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding: 9rem 0 2rem 0;
      hr {
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1rem;
        margin-bottom: 2rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .footer-outer {
      max-width: 80vw;
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer{
        padding: 16rem 0 0 0;
        p{
            width: 50%;
        }
    }
  }
`;
export default Footer;
