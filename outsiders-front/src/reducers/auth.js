// actions
import { CHANGE_AUTH_FIELD } from '../store/action';

//InitialState basic guest informations
const initialState = {
  firstname: 'Alexandre',
  lastname: 'Astier',
  username: 'King Arthur',
  email: '',
  password: '',
  description: '',
  isLogged: true,
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
      // Changing States when we call 'CHANGE_AUTH_FIELD' \\
    case CHANGE_AUTH_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
      };
      // Changing States when we call 'LOGIN_SUCCESS' \\
    case 'LOGIN_SUCCESS':
      return {
        ...oldState,
        isLogged: true,
        username: action.username,
      };
      // Changing states when we call 'LOGOUT' \\
    case 'LOGOUT':
      return {
        ...oldState,
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        description: '',
        isLogged: false,
      };

    default:
      return {...oldState}
  }
};

export default reducer;