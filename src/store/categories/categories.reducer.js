import { CATEGORIES_ACTIONS } from './categories.types';

const INITIAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTIONS.SET_CATEGORIES:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      return state;
  }
};
