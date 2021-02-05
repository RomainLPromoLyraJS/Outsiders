// actions
import { CHANGE_AUTH_FIELD, SIGNUP_SUCCESS, EDIT_USER_SUCCES } from '../store/action';


//InitialState basic guest informations
const initialState = {
  id: '',
  token: '',
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  description: '',
  isLogged: false,
  role_id: '',
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {

    // Changing States when we call 'ADMIN_SUCCESS' \\
    case 'ADMIN_SUCCESS':
      return {
        ...oldState,
        email: action.email,
        id: action.id,
        firstname: action.firstname,
        lastname: action.lastname,
        username: action.username,
        description: action.description,
        password: '',
        isLogged: true,
        token: action.token,
        role_id: action.role_id,
      };
    // Changing states when we call 'ADMIN_FAILURE' \\
    case 'ADMIN_FAILURE':
      return {
        ...oldState,
        email: '',
        password: '',
        isLogged: false,
      };
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
        id: action.id,
        token: action.token,
        firstname: action.firstname,
        lastname: action.lastname,
        username: action.username,
        email: action.email,
        password: '',
        description: action.description,
        isLogged: true,
      };
      // Changing states when we call 'LOGIN_FAILURE' \\
    case "LOGIN_FAILURE":
      return {
        ...oldState,
        email: "",
        password: "",
        isLogged: false,
      };
      // Changing states when we call 'LOGOUT' \\
    case 'LOGOUT':
      return {
        ...oldState,
        id: '',
        token: '',
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        description: '',
        isLogged: false,
      };
    
    case SIGNUP_SUCCESS || EDIT_USER_SUCCES:
      return {
        ...oldState,
        firstname: action.firstname,
        lastname: action.lastname,
        username: action.username,
        email: action.email,
        password: '',
        description: action.description,
      };

    case 'DELETE_OWN_PROFILE_SUCCESS':
      return {
        ...oldState,
        id: '',
        token: '',
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        description: '',
        isLogged: false,
        role_id: '',
      }

    default:
      return {...oldState}
  }
};

export default reducer;