import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/Filter_Context';
const FilterSection = () => {
  const { filters:{text}  , updateFilterValue } = useFilterContext();
  console.log("🚀 ~ file: FilterSection.js ~ line 6 ~ FilterSection ~ text", text)
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name='text' value={text} placeholder="search" onChange={updateFilterValue} />
        </form>
      </div>
    </Wrapper>
  )
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