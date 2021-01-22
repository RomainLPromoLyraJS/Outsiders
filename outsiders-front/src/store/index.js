// == Imports
// packages
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducer
import rootReducer from '../reducers';
// MW
import apiMiddleware from '../middlewares/api';

// store creation
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(apiMiddleware),
  ),
);

export default store;