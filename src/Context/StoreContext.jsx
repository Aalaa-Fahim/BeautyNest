import React, { createContext } from "react";
//import { pro } from "../assets/all_product";
import all_data_product from '../assets/all_product';

export const StoreContext = createContext(null);

const StoreContextProvider = (props)=> {
  const contextValue = {all_data_product};
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )

}
export default StoreContextProvider;