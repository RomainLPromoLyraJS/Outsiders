import { CHANGE_SEARCH_FIELD } from '../store/action';

const initialState = {
  sport: '',
  from: '',
  date: '',
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
      };

    default:
      return {
        ...oldState,
      };
  };
};

export default reducer;