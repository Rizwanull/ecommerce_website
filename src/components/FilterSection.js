import React from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import { useFilterContext } from "../context/Filter_Context";
import FormatPrice from '../helpers/FormatPrice';
const FilterSection = () => {
  // const 
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
  } = useFilterContext();

  // TO GET THE UNIQUE DATA
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    if (property === "colors") {
      /*Old Way to filter the array of on array and remove duplicate value in array*/
      // return newVal = ['all', ...new Set([].concat(...newVal))]

      /******** New Way is below to do above *********** */
      newVal = newVal.flat();
    }
    return (newVal = ["all", ...new Set(newVal)]);
    // console.log(newVal);
  };

  //We need unique data on the basis of category
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsOnlyData = getUniqueData(all_products, "colors");
 

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            placeholder="search"
            autoComplete="off"
            onChange={updateFilterValue}
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryOnlyData.map((curElem, index) => {
            return (
              <button
                className={curElem === category ? "active" : ""}
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}
          >
            {companyOnlyData.map((curElem, index) => {
              return (
                <option key={index} name="company" value={curElem}>
                 
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="filter-colors colors">
        <h3>Colors</h3>

        <div className="filter-color-style">
          {colorsOnlyData.map((curColors, index) => {
            if (curColors === 'all') {
               return (
                 <button
                   key={index}
                   type="button"
                   className={
                     color === curColors 
                       ? "color-all--style active"
                       : "color-all--style"
                   }
                   title={curColors}
                   value={curColors}
                   name="color"
                   onClick={updateFilterValue}
                 >
                   all
                 </button>
               );
            }
            return (
              <button
                key={index}
                type="button"
                className={
                  color === curColors
                    ? "color-btn--style active"
                    : "color-btn--style"
                }
                title={curColors}
                value={curColors}
                name="color"
                onClick={updateFilterValue}
                style={{ backgroundColor: curColors }}
              >
                {color === curColors ? <FaCheck className="check-icon-style"/> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter-price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input type="range" min={minPrice} name="price" max={maxPrice} value={price} onChange={updateFilterValue} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .filter-search {
    input {
      width: 80%;
      padding: 0.8rem 1rem;
    }
  }
  h3 {
    font-weight: 600;
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company {
    form {
      padding: 0.5rem 0;
    }
    .filter-company--select {
      padding: 0.3rem 1.2rem;
      font-size: 1.6rem;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.text};
    }
  }
  .filter-colors .filter-color-style {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .color-btn--style {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    text-transform: capitalize;
    margin-right: 1rem;
    margin-top: 0.5rem;
    background-color: #000;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }

  .color-all--style {
    background-color: transparent;
    border: none;
    text-transform: capitalize;
    cursor: pointer;
    margin-right: 1rem;
    &:hover {
      color: ${({ theme }) => theme.colors.btn};
    }
  }
  .filter-color-style .color-all--style.active {
    border-bottom: 1px solid #000;
    color: ${({ theme }) => theme.colors.btn};
  }
  .check-icon-style {
    font-size: 1.3rem;
    color: #fff;
    display: flex;
    margin: 2px auto;
  }
  .filter-price{
    input{
      box-shadow: none;
      margin:0.5rem 0 1rem o;
      padding: 0;
      cursor: pointer;
    }
  }
`;
export default FilterSection;
