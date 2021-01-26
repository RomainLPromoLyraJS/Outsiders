import { CHANGE_CREATE_FIELD } from '../store/action';

const initialState = {

  sport: '',
  title: '',
  date: '',
  from: '',
  to: '',
  price: '',
  try: '',
  
};

const reducer = (oldState = initialState, action ={}) => {
  switch (action.type) {
    case CHANGE_CREATE_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
        try: 'try',
      };

      default:
        return {
          ...oldState,
        };
  };
};

export default reducer;