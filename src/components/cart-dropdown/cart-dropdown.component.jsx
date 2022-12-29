import { Fragment, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles';
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const [shouldNavigateToCheckout, setShouldNavigateToCheckout] =
    useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldNavigateToCheckout) {
      navigate('checkout');
      setIsCartOpen(false);
    }
  }, [shouldNavigateToCheckout]);

  const navigateToCheckout = () => {
    setShouldNavigateToCheckout(true);
  };

  return (
    <CartDropdownContainer>
      {cartItems.length ? (
        <Fragment>
          <CartItemsContainer>
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </CartItemsContainer>
          <Button onClick={navigateToCheckout}>GO TO CHECKOUT</Button>
        </Fragment>
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
