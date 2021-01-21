//fake data
import catData from '../data/categories';

const initialState = {
  categories: catData,
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    default:
      return {
        ...oldState,
      };
  };
};

export default reducer;