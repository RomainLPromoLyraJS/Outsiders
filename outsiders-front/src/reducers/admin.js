// actions
import { CHANGE_AUTH_FIELD } from "../store/action";

//InitialState basic guest informations
const initialState = {
  email: "",
  password: "",
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
    // Changing States when we call 'ADMIN_SUCCESS' \\
    case "ADMIN_SUCCESS":
      return {
        ...oldState,
        email: action.email,
        password: action.password,
        isLogged: true,
      };
    // Changing states when we call 'ADMIN_FAILURE' \\
    case "ADMIN_FAILURE":
      return {
        ...oldState,
        email: "",
        password: "",
        isLogged: false,
      };

    default:
      return { ...oldState };
  }
};

export default reducer;
