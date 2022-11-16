import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/Filter_Context';
const FilterSection = () => {
  const { filters: { text }, updateFilterValue, all_products } = useFilterContext();

  // TO GET THE UNIQUE DATA 
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    newVal = ['All', ...new Set(newVal)];
    console.log(newVal);
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

`;
export default FilterSection