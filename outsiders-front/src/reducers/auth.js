// actions
import { CHANGE_AUTH_FIELD } from '../store/action';

const initialState = {
  firstname: 'Alexandre',
  lastname: 'Astier',
  username: 'le Roi Arthur',
  email: '',
  password: '',
  description: '',
  isLogged: true,
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_AUTH_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...oldState,
        logged: true,
        username: action.username,
      };
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