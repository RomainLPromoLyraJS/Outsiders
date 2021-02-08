// actions
import {
  CHANGE_ADMIN_FIELD,
  CREATE_SPORT_SUCCESS,
  GET_USERS_SUCCESS,
} from '../store/action';

//InitialState basic guest informations
const initialState = {
  id: '',
  isLogged: false,
  sportNameCreate: '',
  sportNameModify:'',
  sportDescriptionCreate:'',
  sportDescriptionModify:'',
  category_id: '',
  message: '',
  userList: [],
  
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    
      // Changing States when we call 'CHANGE_ADMIN_FIELD' \\
      case CHANGE_ADMIN_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
      };

    case CREATE_SPORT_SUCCESS:
      return {
        ...oldState,
        sportNameCreate: '',
        sportDescriptionCreate: '',
        category_id: null,
        message: 'Le nouveau sport a bien été créé.'
      };

    case 'MODIFY_SPORT_SUCCESS':
      return {
        ...oldState,
        sportNameModify: '',
        sportDescriptionModify: '',
        category_id: null,
        message: action.message,
      };

    case 'DELETE_SPORT_SUCCESS':
      return {
        ...oldState,
        category_id:'',
        message: action.message,
      };

      case GET_USERS_SUCCESS:
      return {
        ...oldState,
        userList: action.userList,
      };

      case 'DELETE_USER_SUCCESS':
      return {
        ...oldState,
        message: action.message,
      };

    default:
      return { ...oldState };
  }
};

export default reducer;
