import { CHANGE_SEARCH_FIELD, GET_SPORT_TITLE } from '../store/action';

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
    case GET_SPORT_TITLE:
      return {
        ...oldState,
        sport : action.title,
      }
      
    default:
      return {
        ...oldState,
      };
  };
};

export default reducer;