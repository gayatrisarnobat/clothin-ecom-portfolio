import { Fragment, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

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
    <div className="cart-dropdown-container">
      {cartItems.length ? (
        <Fragment>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </div>
          <Button onClick={navigateToCheckout}>GO TO CHECKOUT</Button>
        </Fragment>
      ) : (
        <p>You haven't added any items yet</p>
      )}
    </div>
  );
};

export default CartDropdown;
