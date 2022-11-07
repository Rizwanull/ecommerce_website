const productreducer = (state, action) => {
    // if (action.type === 'SET_LOADING') {
    //     return {
    //         ...state,
    //         isLoading: true,
    //     }
    // }
    // if (action.type === 'API_ERROR') {
    //     return {
    //         ...state,
    //         isLoading: false,
    //         isError:true,
    //     }
    // }  not good practice then we done it by switch statement
    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };

      // break;
      case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      // break;
      case "SET_API_DATA":
        const featureData = action.payload.filter((curElement) => {
          return curElement.featured === true;
        });
        return {
          ...state,
          isLoading: false,
          isError: false,
          products: action.payload,
          featureProducts: featureData,
        };

      case "SET_SINGLE_LOADING":
        return {
          ...state,
          isSingleLoading: true,
        };
      case "SET_SINGLE_PRODUCT":
        return {
          ...state,
          isSingleLoading: false,
          singleProduct: action.payload,
        };
      case "SET_SINGLE_ERROR":
        return {
          ...state,
          isSingleLoading: false,
          isError: true,
        };


      default:
        return state;
      // break;
    }

    return state;
 };

export default productreducer;