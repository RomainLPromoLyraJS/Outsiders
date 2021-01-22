// == Package Imports
import { combineReducers } from 'redux';

// == Local imports
import authReducer from './auth';
import categoriesReducer from './sports';
import searcReducer from './search';
import tripsReducer from './trip';

export default combineReducers({
  auth: authReducer,
  sports: categoriesReducer,
  search: searcReducer,
  trip: tripsReducer,
});