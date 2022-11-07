import axios from "axios";
import { useCallback } from "react";
import { useReducer, useContext, useEffect, createContext } from "react";
import reducer from '../reducer/productreducer';


const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct:{},
}
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        }
        catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }
    // second api call for to get single products
    const getSingleProduct = /*useCallback( */ async (url) => {
        dispatch({ type: 'SET_SINGLE_LOADING' });
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: 'SET_SINGLE_PRODUCT', payload: singleProduct })
        }
        catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    }
        // , []);
   

    useEffect(() => {
        getProducts(API);
    }, []);


    return <AppContext.Provider value={{...state,getSingleProduct,getProducts}}>{children}</AppContext.Provider>
}
 
// global custom hook
const useProductContext = () => {
    return useContext(AppContext);
}


export { AppProvider,AppContext,useProductContext };