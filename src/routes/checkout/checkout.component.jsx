import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { getCartTotal } from '../../store/cart/cart.utils';
import './checkout.styles.scss';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${getCartTotal(cartItems)}</div>
    </div>
  );
};

export default Checkout;
