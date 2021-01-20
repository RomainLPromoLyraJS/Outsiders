// == Package Imports
import { combineReducers } from 'redux';

// == Local imports
import authReducer from './auth';

export default combineReducers({
  auth: authReducer,
});