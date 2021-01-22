import {
  SEARCH_SUCCESS,
} from '../store/action';

const initialState = {
  list: [],
};

const reducer = (oldState = initialState, action = {}) => {
  switch(action.type) {
    case SEARCH_SUCCESS:
      return {
        ...oldState,
        list: action.tripList,
      };

    default:
      return {
      ...oldState,
      };
  };
};

export default reducer;