import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTIONS } from './cart.types';

export const setIsCartOpen = (isCartOpen) =>
  createAction(CART_ACTIONS.SET_IS_CART_OPEN, isCartOpen);

export const addItemToCart = (productToAdd) =>
  createAction(CART_ACTIONS.ADD_ITEM_TO_CART, productToAdd);

export const removeItemFromCart = (cartItemToRemove) =>
  createAction(CART_ACTIONS.REMOVE_ITEM_FROM_CART, cartItemToRemove);

export const clearItem = (cartItemToClear) =>
  createAction(CART_ACTIONS.CLEAR_FULL_CART_ITEM, cartItemToClear);
