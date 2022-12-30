import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTIONS } from './categories.types';

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTIONS.SET_CATEGORIES, categoriesMap);
