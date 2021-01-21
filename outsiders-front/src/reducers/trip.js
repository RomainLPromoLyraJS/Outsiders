// import static data (Fake)
import tripData from '../data/tripsData';

const initialState = {
  trips: tripData,
};

const reducer = (oldState = initialState, action = {}) => {
  switch(action.type) {
    default:
      return {
      ...oldState,
      };
  };
};

export default reducer;