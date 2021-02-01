import {
  SEARCH_SUCCESS,
  GET_TRIPS_SUCCESS,
  GET_TRIP_DETAILS_SUCCESS,
  CHANGE_TRIP_FIELD,
  CHANGE_MESSAGE_FIELD,
} from '../store/action';

const initialState = {
  list: [],
  isLoaded: false,
  messageValue: '',
  currentTrip: {
    trip_id: '',
    trip_title: '',
    trip_description: '',
    date: '',
    time: '',
    from: '',
    to: '',
    places: '',
    minimum: '',
    price: '',
    duration: '',
    sport_title: '',
    sport_id:'',
    creator: [],
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

     case CHANGE_TRIP_FIELD:
       return {
         ...oldState,
         currentTrip: 
         { ...oldState.currentTrip,
           [action.name]: action.value,
         }
       };

    case GET_TRIP_DETAILS_SUCCESS:
      return {
        ...oldState,
        isLoaded: true,
        currentTrip: action.trip,
      };

    case 'DELETE_TRIP_SUCCESS':
      return {
        ...oldState,
        currentTrip: {},
      };

    case CHANGE_MESSAGE_FIELD:
      return {
        ...oldState,
        messageValue: action.value,
      };
    
    case 'CHANGE_LOADING':
      return {
        ...oldState,
        isLoaded: false,
      };

    default:
      return {
      ...oldState,
      };
  };
};

export default reducer;