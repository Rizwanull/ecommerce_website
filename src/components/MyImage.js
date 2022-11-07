import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineGlobal } from "react-icons/ai";
const MyImage = ({ imgs = [{ url: "" }] }) => {
  //assign a value to imgs prop because in start hw don't knows imgs map
  const [mainImage, setMainImage] = useState(imgs[0]);
  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {imgs.map((curElem, index) => {
          return (
            <figure key={index}>
              <img
                src={curElem.url}
                alt={curElem.filename}
                className="box-image--style"
                onMouseOver={() => setMainImage(curElem)}
              />
            </figure>
          );
        })}
      </div>
      {/* second column  */}
      <div className="main-screen">
        <figure>
          <AiOutlineGlobal className="icons" />
          <figcaption className="caption">Click to Expand</figcaption>
          <img src={mainImage.url} alt={mainImage.filename} />
        </figure>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;
  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      background-size: cover;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    figure {
      cursor: pointer;
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .icons {
        font-size: 2rem;
        position: absolute;
        bottom: 2.3%;
        left: 25%;
        z-index: 9999 !important;
        color: black;
      }
      .caption {
        position: absolute !important;
        left: 6%;
        margin-bottom: 2px;
        text-align: center;
        background-color: ${({ theme }) => theme.colors.bg} !important;
        color: ${({ theme }) => theme.colors.text};
        top: 88% !important;
        font-weight: bold;
      }
      img {
        max-width: 100%;
        height: auto;
        box-shadow: ${({ theme }) => theme.colors.shadow};
      }
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;
    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
    .grid {
      margin-left: 0 !important;
      img {
        height: 80px !important;
        object-fit: cover;
      }
    }
    .main-screen {
      padding-left: 0 !important;
      figure {
        .icons {
          bottom: 12% !important;
          left: 38% !important;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .grid {
      margin-left: 2.5rem;
    }
    .main-screen {
      padding-left: 3em;
      margin: 0 !important;
      figure {
        .icons {
          bottom: 2%;
          left: 20%;
        }
        .caption{
          top: 84% !important;
        }
      }
    }
  }
  @media (max-width:425px ){
   .main-screen{
    figure{
      .icons{
        bottom: 8% !important;
        left: 30% !important;
      }
    }
   }
  }

`;
export default MyImage;
