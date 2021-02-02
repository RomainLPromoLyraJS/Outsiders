// == NAMED AS 'exapi' for EXTERNAL API == \\
import { GET_WEATHER_SUCCESS } from '../store/action';


const initialState = {

  weatherData: [],

};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      return {
        ...oldState,
        weatherData: action.weather,
      };
    default:
      return {
        ...oldState,
      };
  };
};

export default reducer;