// Action imports
import {
  GET_SPORTS_SUCCESS,
  GET_CATEGORIES_SUCCESS,
} from '../store/action';

const initialState = {
  categories: [],
  list: [],
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case GET_SPORTS_SUCCESS:
      return {
        ...oldState,
        list: action.list,
      };
      case GET_CATEGORIES_SUCCESS:
      return {
        ...oldState,
        categories: action.categories,
      };
    default:
      return {
        ...oldState,
      };
  };
};

export default reducer;