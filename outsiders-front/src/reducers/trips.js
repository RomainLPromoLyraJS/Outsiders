import {
  SEARCH_SUCCESS,
  GET_TRIPS_SUCCESS,
  CHANGE_CREATE_FIELD,
  CREATE_TRIP_SUCCESS,
  
} from '../store/action';

const initialState = {
  list: [],
  isLoaded: false,
  title: '',
  description:'',
  date: '',
  time:'',
  from: '',
  to: '',
  places: '',
  duration:'',
  minimum:'',
  price: '',
  sport_id: '',
};

const reducer = (oldState = initialState, action = {}) => {
  switch(action.type) {
    case SEARCH_SUCCESS:
      return {
        ...oldState,
        list: action.tripList,
        isLoaded: true,
      };
    case CHANGE_CREATE_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
      };
    case GET_TRIPS_SUCCESS:
      return {
        ...oldState,
        list: action.tripList,
        isLoaded: true,
      };

    case 'CHANGE_LOADING':
			return {
        ...oldState,
        isLoaded: false,
      };
      
    case CREATE_TRIP_SUCCESS:
      return {
        ...oldState,
      }

    default:
      return {
      ...oldState,
      };
  };
};

export default reducer;