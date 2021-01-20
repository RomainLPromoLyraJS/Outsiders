// == Imports
// packages
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducer
import rootReducer from '../reducers';

// store creation
const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;