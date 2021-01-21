// == Package Imports
import { combineReducers } from 'redux';

// == Local imports
import authReducer from './auth';
import tripsReducer from './trip';

export default combineReducers({
  auth: authReducer,
  trip: tripsReducer,
});