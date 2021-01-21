// actions
import { CHANGE_AUTH_FIELD } from '../store/action';

const initialState = {
  firstname: '',
  lastname: '',
  username: null,
  email: '',
  password: '',
  description: '',
  logged: false,
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
        logged: action.logged,
        username: action.username,
      };
    case 'LOGOUT':
      return {
        ...oldState,
        email: '',
        password: '',
        logged: false,
        username: null,
      };

    default:
      return {...oldState}
  }
};

export default reducer;