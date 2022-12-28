import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  getCartCount: () => null,
  getCartTotal: () => null,
  clearItem: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const getCartCount = () => {
    const quantities = cartItems.map((cartItem) => cartItem.quantity);
    return quantities.reduce((prevVal, quantity) => prevVal + quantity, 0);
  };

  const getCartTotal = () => {
    const prices = cartItems.map(
      (cartItem) => cartItem.price * cartItem.quantity
    );
    return prices.reduce((prevVal, price) => prevVal + price, 0);
  };

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
  };

  const removeItemFromCart = (cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToRemove.id
      );
    }

    // return back cart items with matching cart item with reduced quantity
    return setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  const clearItem = (cartItemToClear) => {
    setCartItems(
      cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
    );
  };

  const value = {
    cartItems,
    addItemToCart,
    isCartOpen,
    setIsCartOpen,
    getCartCount,
    getCartTotal,
    clearItem,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
