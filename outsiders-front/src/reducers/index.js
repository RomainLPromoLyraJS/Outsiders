// == Package Imports
import { combineReducers } from 'redux';

// == Local imports
import authReducer from './auth';
import tripReducer from './trips';

export default combineReducers({
  auth: authReducer,
  trip: tripReducer,
});