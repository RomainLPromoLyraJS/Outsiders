import {
  SEARCH_SUCCESS,
  GET_TRIPS_SUCCESS,
  CHANGE_TRIP_FIELD,
  CREATE_TRIP_SUCCESS,
  PATCH_TRIP_SUCCESS,
  DELETE_TRIP_SUCCESS,
} from '../store/action';

const initialState = {
  list: [],
  isLoaded: false,
  trip_id: '1',
  title: 'Mountain Trail',
  description:'BestTrailEver',
  date: '2021-01-30',
  time:'09:00',
  from: 'Lyon',
  to: 'Grenoble',
  places: '4',
  duration:'0.5',
  minimum:'2',
  price: '15',
  sport_id: '19',
  isDeleted: false,
};

const reducer = (oldState = initialState, action = {}) => {
  switch(action.type) {
    case SEARCH_SUCCESS:
      return {
        ...oldState,
        list: action.tripList,
        isLoaded: true,
      };
    case CHANGE_TRIP_FIELD:
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

    case PATCH_TRIP_SUCCESS:
      return {
        ...oldState,
      }

    case DELETE_TRIP_SUCCESS:
      return {
        ...oldState,
        isDeleted: true,
      }
    case 'CHANGE_DELETE_STATE':
      return {
        ...oldState,
        isDeleted: false,
      }

    default:
      return {
      ...oldState,
      };
  };
};

export default reducer;