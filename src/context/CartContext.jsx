import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0)

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    console.log(item);
  };

  const removeFromCart = (productId, size) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== productId || item.size !== size)
    );
  };

  const updateCartItem = (productId, size, newValues) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.size === size ? { ...item, ...newValues } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    setItemCount(count)
  }, [cart])
  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItem, clearCart, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
