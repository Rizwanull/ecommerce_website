const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    // get option tag selected value
    case "GET_SORTED_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      // console.log("🚀 ~ file: FilterReducer.js ~ line 22 ~ filterReducer ~ sort_value", sort_value)
      return {
        ...state,
        // sorting_value: sort_value,
        sorting_value:action.payload,
      };
    // on the basis of selected option tag value product sortion
    case "SORTING_PRODUCTS":

      let newSortData;
      // const { filter_products } = state;
      let tempSortProduct = [...action.payload];
      if (state.sorting_value === 'lowest') {
        const sortingProducts = (a,b) => {
          return a.price - b.price;
        }
        newSortData=tempSortProduct.sort(sortingProducts);
        console.log("🚀 ~ file: FilterReducer.js ~ line 38 ~ filterReducer ~ newSortData", newSortData)
      }
      if (state.sorting_value === 'highest') {
        const sortingProducts = (a, b) => {
          return b.price - a.price;
        };
        newSortData=tempSortProduct.sort(sortingProducts);
        console.log("🚀 ~ file: FilterReducer.js ~ line 45 ~ filterReducer ~ newSortData", newSortData)
      }
      if (state.sorting_value === 'a-z') {
        newSortData = tempSortProduct.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        console.log("🚀 ~ file: FilterReducer.js ~ line 32 ~ filterReducer ~ newSortData", newSortData)
      }
       if (state.sorting_value === 'z-a') {
        newSortData = tempSortProduct.sort((a,b) =>
          b.name.localeCompare(a.name)
        );
        console.log("🚀 ~ file: FilterReducer.js ~ line 57 ~ filterReducer ~ newSortData", newSortData)
      }
      return {
        ...state,
        filter_products: newSortData,
        
        // products:newSortData,
        
      }
      
    default:
      return state;
  }
};

export default filterReducer;
