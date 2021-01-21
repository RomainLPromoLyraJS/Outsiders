// == Package Imports
import { combineReducers } from 'redux';

// == Local imports
import authReducer from './auth';
import categoriesReducer from './sports';

export default combineReducers({
  auth: authReducer,
  sports: categoriesReducer,
});