// == Imports
// packages
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducer
import rootReducer from '../reducers';
// MW
import authMiddleware from '../middlewares/auth';
import apiMiddleWare from '../middlewares/api';
import exapiMiddleWare from '../middlewares/exapi';

// store creation
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(authMiddleware),
    applyMiddleware(apiMiddleWare),
    applyMiddleware(exapiMiddleWare),
  ),
);

export default store;