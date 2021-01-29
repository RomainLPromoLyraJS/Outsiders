// == Package Imports
import { combineReducers } from 'redux';

// == Local imports
import authReducer from './auth';
import categoriesReducer from './sports';
import searcReducer from './search';
import tripsReducer from './trips';
import exapiReducer from './exapi';

export default combineReducers({
  auth: authReducer,
  sports: categoriesReducer,
  search: searcReducer,
  trips: tripsReducer,
  exapi: exapiReducer,
});