import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTIONS } from './categories.types';

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTIONS.FETCH_CATEGORIES_FAILED, error);
