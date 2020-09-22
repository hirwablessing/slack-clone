import React, { createContext, useReducer, useContext } from "react";

// Need Context API
// 1. To track basket
// 2. To Track user

//Prepares dataLayer
export const StateContext = createContext();

//wrap our app and provides the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
