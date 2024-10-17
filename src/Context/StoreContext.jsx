import React, { createContext, useState } from "react";
import all_data_product from '../assets/all_product';

export const StoreContext = createContext(null);

const getDefaultCart = () =>{
  let cart = {};
  for (let index = 0; index < all_data_product.length+1; index++) {
    cart[index] = 0;
  }
  return cart;
}

const StoreContextProvider = (props)=> {
  const [cartItems, setCartItems] = useState(getDefaultCart);
  
  
  // Function to add item to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}) );
    console.log(cartItems);
  }

  // Function to remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(0, prev[itemId] - 1),
    }));
  };

  // Function to update quantity of an item in the cart
  const updateCartQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: newQuantity }));
    }
  }

  // Function to reset the cart (set all items' quantities to 0)
  const resetCart = () => {
    setCartItems(getDefaultCart());
  }

  const contextValue = {
    all_data_product, 
    cartItems, 
    addToCart, 
    removeFromCart, 
    updateCartQuantity,
    resetCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )

}
export default StoreContextProvider;