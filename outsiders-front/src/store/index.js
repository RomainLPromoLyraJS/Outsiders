// == Imports
// packages
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducer
import rootReducer from '../reducers';
// MW
import authMiddleware from '../middlewares/auth';
import apiMiddleWare from '../middlewares/api';

// store creation
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(authMiddleware),
    applyMiddleware(apiMiddleWare),
  ),
);

export default store;