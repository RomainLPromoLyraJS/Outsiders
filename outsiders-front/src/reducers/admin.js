// actions
import {
  CHANGE_AUTH_FIELD,
  CHANGE_ADMIN_FIELD,
  CREATE_SPORT_SUCCESS,
  GET_USERS_SUCCESS,
} from "../store/action";

//InitialState basic guest informations
const initialState = {
  id: "",
  email: "",
  password: "",
  isLogged: false,
  sportNameCreate: "",
  sportNameModify:"",
  sportDescriptionCreate:"",
  sportDescriptionModify:"",
  category_id: "",
  message: "",
  token: "",
  userList: [],
  
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
        token: action.token,
      };
    // Changing states when we call 'ADMIN_FAILURE' \\
    case "ADMIN_FAILURE":
      return {
        ...oldState,
        email: "",
        password: "",
        isLogged: false,
      };

    case CHANGE_ADMIN_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
      };

    case CREATE_SPORT_SUCCESS:
      return {
        ...oldState,
        sportNameCreate: "",
        sportDescriptionCreate: "",
        category_id: null,
        message: "Le nouveau sport a bien été créé."
      };

    case "MODIFY_SPORT_SUCCESS":
      return {
        ...oldState,
        sportNameModify: "",
        sportDescriptionModify: "",
        category_id: null,
        message: action.message,
      };

    case "DELETE_SPORT_SUCCESS":
      return {
        ...oldState,
        category_id:"",
        message: action.message,
      };

      case GET_USERS_SUCCESS:
      return {
        ...oldState,
        userList: action.userList,
      };

    default:
      return { ...oldState };
  }
};

export default reducer;
