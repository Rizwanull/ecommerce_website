import React from 'react'
import styled from 'styled-components'
import { BsFillGridFill,BsList } from 'react-icons/bs';
import { useFilterContext } from '../context/Filter_Context';
import { useProductContext } from '../context/productcontext';

const Sort = () => {
  const { products } = useProductContext();
  const { grid_view ,setGridView,setListView,filter_products,sorting} = useFilterContext();
  // if (filter_products === undefined) {
  // return <h1>isuue and we fix them in second!</h1>
  // }
   
  return (
    <Wrapper className="sort-section">
      {/* 1st column  */}
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort_btn" : "sort_btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={!grid_view ? "active sort_btn" : "sort_btn"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>
      {/* 2nd column  */}
      <div className="product-total--data">
        <p>{`${products.length} Product Available`}</p>
      </div>
      {/* 3rd column  */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" onClick={sorting}>
            <option value="option">Sort Products</option>
            <option value="#" disabled></option>
            <option value="lowest">price: Low To High</option>
            <option value="#" disabled></option>
            <option value="highest">price: High To Low</option>
            <option value="#" disabled></option>
            <option value="a-z">Order:A-Z</option>
            <option value="#" disabled></option>
            <option value="z-a">Order:Z-A</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
margin: 5rem 0 0 0;
.sorting-list--grid{
  display: flex;
  gap: 2rem;
  .sort_btn{
    padding: 0.8rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
  }
  .icon{
    font-size: 1.6rem;
  }
  .active{
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    
  }
}
`;
export default Sort