const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
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
        sorting_value: action.payload,
      };
    // on the basis of selected option tag value product sortion
    case "SORTING_PRODUCTS":
      let newSortData;
      const { filter_products, sorting_value } = state;

      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
         
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };
    // update filters value case in search
    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    // For to filtered out the products on the basis of search words
    case "FILTER_OUT_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];
      console.log("🚀 ~ file: FilterReducer.js ~ line 73 ~ filterReducer ~ tempFilterProduct", tempFilterProduct)
      const { text,category,company } = state.filters;
      console.log("🚀 ~ file: FilterReducer.js ~ line 74 ~ filterReducer ~ category", category)
      console.log("🚀 ~ file: FilterReducer.js ~ line 74 ~ filterReducer ~ company", company)

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }
     if (category !== "all") {
       tempFilterProduct = tempFilterProduct.filter(
         (curElem) => curElem.category === category
       );
     }

     if (company !== "all") {
       tempFilterProduct = tempFilterProduct.filter(
         (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
       );
     }
      
      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default filterReducer;
