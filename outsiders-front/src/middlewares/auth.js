// Package imports
import axios from 'axios';

// Local imports
import apiUrl from './url';
import { signupSuccess } from '../store/action';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case 'LOGIN': {

      const { auth: { email, password } } = store.getState();

      const config = {
        method: 'post',
        url: `${apiUrl}/login`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email,
          password,
        },
      };

      axios(config)
        .then((response) => {
          store.dispatch({
            type: 'LOGIN_SUCCESS',
            ...response.data.data
          });
          console.log(response.data);
          
        }).catch((error) => {
          console.log(error);
        });
      break;
    };

    case 'USER_SIGNUP': {

      const { auth: { firstname, lastname, username, email, password, description } } = store.getState();

      const config = {
        method: 'post',
        url: `${apiUrl}/user`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          firstname,
          lastname,
          username,
          email,
          password,
          description
        },
      };

      axios(config)
        .then((response) => {
          store.dispatch(signupSuccess(response.data.data));
          
        }).catch((error) => {
          console.log(error);
        });
      break;
    };

    default:
      next(action);
  }
};

export default api;