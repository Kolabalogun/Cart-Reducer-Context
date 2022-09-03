import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  navAmount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // clear Cart
  const clearCart = () => {
    dispatch({ type: "CLEARCART" });
  };

  //remove Item
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  // increase item 

const increase = (id) => {
  dispatch({ type: "INCREASE", payload: id  });
}
const decrease = (id) => {
  dispatch({ type: "DECREASE", payload: id  });
}

useEffect(()=>{
  dispatch({type: 'GETTOTAL'})
},[state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
