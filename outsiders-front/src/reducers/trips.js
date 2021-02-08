import {
  SEARCH_SUCCESS,
  GET_TRIPS_SUCCESS,
  GET_TRIP_DETAILS_SUCCESS,
  CHANGE_TRIP_FIELD,
  CHANGE_MESSAGE_FIELD,
  NEW_MESSAGE_SUCCESS,
  GET_WEATHER_SUCCESS,
  GET_MESSAGE_SUCCESS,
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
    places: 4,
    minimum: '',
    price: '',
    duration: 1,
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
        currentTrip: action.trip,
      };

    case 'DELETE_TRIP_SUCCESS':
      return {
        ...oldState,
        currentTrip: {
          trip_id: '',
          trip_title: '',
          trip_description: '',
          date: '',
          time: '',
          from: '',
          to: '',
          places: 4,
          minimum: '',
          price: '',
          duration: 1,
          sport_title: '',
          sport_id:'',
          creator: [],
          message: [],
          participants: [],
        },
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
    
    case NEW_MESSAGE_SUCCESS:
      return {
        ...oldState,
        messageValue: '',
        currentTrip: {
          ...oldState.currentTrip,
          message: action.messages,
        }
      };
    
    case GET_MESSAGE_SUCCESS:
      return {
        ...oldState,
        currentTrip: {
          ...oldState.currentTrip,
          message: action.messages,
        }
      };
    
    case GET_WEATHER_SUCCESS:
      return {
        ...oldState,
        isLoaded:true,
      };
    
    default:
      return {
      ...oldState,
      };
  };
};

export default reducer;