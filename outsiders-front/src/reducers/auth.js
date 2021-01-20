// actions
import { CHANGE_AUTH_FIELD } from '../store/action';

const initialState = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  description: '',
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_AUTH_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
      }

    default:
      return {...oldState}
  }
};

export default reducer;