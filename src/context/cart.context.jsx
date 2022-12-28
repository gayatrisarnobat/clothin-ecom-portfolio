import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (productToAdd) => {
    const existingProduct = cartItems.find(
      (product) => product.id === productToAdd.id
    );
    if (!existingProduct) {
      setCartItems([
        ...cartItems,
        {
          ...productToAdd,
          quantity: 1,
        },
      ]);
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === productToAdd.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        )
      );
    }
    setCartCount(cartCount + 1);
  };

  const value = {
    cartItems,
    cartCount,
    addItemToCart,
    isCartOpen,
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
