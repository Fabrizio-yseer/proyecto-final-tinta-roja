import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addItem = (item, quantity) => {
    const existingItem = cart.find((prod) => prod.id === item.id);

    if (existingItem) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };


  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };


  const totalItems = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };


  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  };


  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
        isInCart, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
