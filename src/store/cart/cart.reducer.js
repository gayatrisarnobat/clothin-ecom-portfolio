import { CART_ACTIONS } from './cart.types';

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTIONS.ADD_ITEM_TO_CART:
      const { cartItems } = state;
      const existingProduct = cartItems.find(
        (product) => product.id === payload.id
      );
      if (!existingProduct) {
        return {
          ...state,
          cartItems: [
            ...cartItems,
            {
              ...payload,
              quantity: 1,
            },
          ],
        };
      } else {
        return {
          ...state,
          cartItems: cartItems.map((cartItem) =>
            cartItem.id === payload.id
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity + 1,
                }
              : cartItem
          ),
        };
      }
    case CART_ACTIONS.REMOVE_ITEM_FROM_CART: {
      const { cartItems } = state;
      let updatedCartItems = [...cartItems];
      // find the cart item to remove
      const existingCartItem = updatedCartItems.find(
        (cartItem) => cartItem.id === payload.id
      );

      // check if quantity is equal to 1, if it is remove that item from the cart
      if (existingCartItem.quantity === 1) {
        return {
          ...state,
          cartItems: updatedCartItems.filter(
            (cartItem) => cartItem.id !== payload.id
          ),
        };
      }

      // return back cart items with matching cart item with reduced quantity
      return {
        ...state,
        cartItems: cartItems.map((cartItem) =>
          cartItem.id === payload.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ),
      };
    }
    case CART_ACTIONS.CLEAR_FULL_CART_ITEM: {
      const { cartItems } = state;
      return {
        ...state,
        cartItems: cartItems.filter((cartItem) => cartItem.id !== payload.id),
      };
    }
    case CART_ACTIONS.CLEAR_FULL_CART:
      return {
        ...state,
        cartItems: [],
        isCartOpen: false,
      };
    default:
      return state;
  }
};
