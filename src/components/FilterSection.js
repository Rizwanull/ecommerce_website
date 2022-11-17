import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/Filter_Context';
const FilterSection = () => {
  const { filters: { text ,category}, updateFilterValue, all_products } = useFilterContext();

  // TO GET THE UNIQUE DATA 
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    return (newVal = ['All', ...new Set(newVal)]);
    // console.log(newVal);
  }

  //We need unique data on the basis of category
  const categoryOnlyData = getUniqueData(all_products,"category");
  
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
          {categoryOnlyData.map((curElem,index) => {
            return <button className={curElem === category ? "active":""} key={index} type='button' name='category' value={curElem} onClick={updateFilterValue}>{curElem}</button>
          })}
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
padding:5rem 0;
display: flex;
flex-direction: column;
gap: 3rem;
.filter-search{
  input{
    width: 80%;
    padding: 0.8rem 1rem;
  }
}
.filter-category{
  div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.4rem;
    button{
      border: none;
      background: ${({ theme }) => theme.colors.white};
      text-transform: capitalize;
      cursor: pointer;
      &:hover{
        color: ${({theme})=>theme.colors.btn};
      }
    }
    .active{
      border-bottom: 1px solid #000;
      color: ${({theme})=>theme.colors.btn}
    }
  }
}

`;
export default FilterSection