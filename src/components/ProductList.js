import React, { useState } from 'react';
import { useProductContext } from '../context/productcontext';
import { useFilterContext } from  "../context/Filter_Context";
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { isLoading } = useProductContext();
  
  const { filter_products, grid_view } = useFilterContext();
  
  
  if (isLoading) { return <h2 style={{ marginTop:"5rem"}}>Loading ......</h2> }
  if (grid_view === true) {
       return <GridView product={filter_products} />
  }
  if (grid_view === false) {
        return <ListView product={filter_products} />
  }
 
  
 
  
}

export default ProductList;