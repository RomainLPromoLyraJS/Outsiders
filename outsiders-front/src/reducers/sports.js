//fake data
import catData from '../data/categories';
import sportData from '../data/sports';

const initialState = {
  categories: catData,
  list: sportData,
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