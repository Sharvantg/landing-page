"use client";

import { createContext, useState } from "react";

// Create a context object
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  // State to store the count of items in the cart
  const [itemCount, setItemCount] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);

  // Function to update the count of items when an item is added/removed
  const updateTheCartValue = (status, id) => {
    if (status) {
      setItemCount((prevCount) => prevCount + 1);
      setItemsInCart([...itemsInCart, id]);
    } else {
      setItemCount((prevCount) => prevCount - 1);
      setItemsInCart(itemsInCart.filter((a) => a != id));
    }
  };

  const doesThisProdExistInTheCart = (id) => {
    const existingItemIndex = itemsInCart.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) return true;
    else return false;
  };

  // Value object to be provided by the context
  const contextValue = {
    itemCount,
    updateTheCartValue,
    doesThisProdExistInTheCart,
  };

  return (
    // Provide the context value to the children components
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
