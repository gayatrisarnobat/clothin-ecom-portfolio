export const getCartCount = (cartItems) => {
  const quantities = cartItems.map((cartItem) => cartItem.quantity);
  return quantities.reduce((prevVal, quantity) => prevVal + quantity, 0);
};

export const getCartTotal = (cartItems) => {
  const prices = cartItems.map(
    (cartItem) => cartItem.price * cartItem.quantity
  );
  return prices.reduce((prevVal, price) => prevVal + price, 0);
};
