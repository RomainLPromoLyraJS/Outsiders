import {
  SEARCH_SUCCESS,
  GET_TRIPS_SUCCESS,
} from '../store/action';

const initialState = {
  list: [],
  isLoaded: false,
  currentTrip: {
    id: '',
    title: '',
    description: '',
    date: '',
    time: '',
    from: '',
    to: '',
    places: '',
    minimum: '',
    price: '',
    duration: '',
    message: [],
    participants: [],
  },
};

const reducer = (oldState = initialState, action = {}) => {
  switch(action.type) {
    case SEARCH_SUCCESS:
      return {
        ...oldState,
        list: action.tripList,
        isLoaded: true,
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
			}
    default:
      return {
      ...oldState,
      };
  };
};

export default reducer;