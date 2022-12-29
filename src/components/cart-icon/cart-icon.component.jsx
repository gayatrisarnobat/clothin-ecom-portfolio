import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {
  CartIconContainer,
  ItemCount,
  ShoppingIconContainer,
} from './cart-icon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, getCartCount, cartItems } =
    useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconContainer className="shopping-icon" />
      <ItemCount className="item-count">{getCartCount()}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
