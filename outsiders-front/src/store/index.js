// == Imports
// packages
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducer
import rootReducer from '../reducers';
// MW
import authMiddleware from '../middlewares/auth';
import apiMiddleware from '../middlewares/api';
import adminMiddleware from '../middlewares/admin';

// store creation
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(authMiddleware),
    applyMiddleware(apiMiddleware),
    applyMiddleware(adminMiddleware),
  ),
);

export default store;