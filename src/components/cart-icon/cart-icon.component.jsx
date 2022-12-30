import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
import {
  selectCartItems,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { getCartCount } from '../../store/cart/cart.utils';
import {
  CartIconContainer,
  ItemCount,
  ShoppingIconContainer,
} from './cart-icon.styles';

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconContainer className="shopping-icon" />
      <ItemCount className="item-count">{getCartCount(cartItems)}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
