import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";
const Star = ({ stars, reviews }) => {
  // console.log("🚀 ~ file: Star.js ~ line 6 ~ Star ~ stars", stars)
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icons" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icons" />
        ) : (
          <AiOutlineStar className="icons" />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="icon-style">
        {ratingStar}
        <p> {reviews} customer reviews</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .icon-style {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.2rem;
    .icons {
      color: orange;
      font-size: 2rem;
    }
    p {
      margin: 0;
      padding-left: 1.6rem;
    }
  }
`;
export default Star;
