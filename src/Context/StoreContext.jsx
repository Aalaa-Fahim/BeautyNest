import React, { createContext } from "react";
import { all_product} from '../assets/all_product';

export const StoreContext = createContext(null);

const StoreData = (props)=> {
  const contextValue = {all_product};
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )

}
export default StoreData;