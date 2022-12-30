import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles';
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const [shouldNavigateToCheckout, setShouldNavigateToCheckout] =
    useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldNavigateToCheckout) {
      navigate('checkout');
      dispatch(setIsCartOpen(false));
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
