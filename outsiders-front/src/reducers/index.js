// == Package Imports
import { combineReducers } from 'redux';

// == Local imports
import authReducer from './auth';
import categoriesReducer from './sports';
import searcReducer from './search';
import tripsReducer from './trips';
import adminReducer from './admin';

export default combineReducers({
  auth: authReducer,
  sports: categoriesReducer,
  search: searcReducer,
  trips: tripsReducer,
  admin: adminReducer,
});