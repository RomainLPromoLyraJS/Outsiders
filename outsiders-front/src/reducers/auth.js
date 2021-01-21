// actions
import { CHANGE_AUTH_FIELD } from '../store/action';

const initialState = {
  firstname: 'Alexandre',
  lastname: 'Astier',
  username: 'le Roi Arthur',
  email: '',
  password: '',
  description: 'ma bio : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet est diam, sed laoreet tellus blandit id. Maecenas ut felis leo. Quisque sed cursus arcu. Nullam augue enim, consectetur at urna sed, malesuada faucibus elit. Aliquam augue nibh, fringilla vel tincidunt efficitur, imperdiet in urna. Sed nec luctus risus. Ut.',
  isLogged: true,
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