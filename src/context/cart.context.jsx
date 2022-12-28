import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartProducts: [],
  setCartProducts: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { cartProducts, setCartProducts, isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
