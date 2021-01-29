// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Weather from '../components/Weather';

// STATES that we give to Props (Weather)
const mapStateToProps = (state) => ({
  weather: state.exapi.weatherData
  
});

const mapDispatchToProps = (dispatch) => ({
  loadWeather: () => {
    dispatch({type: 'LOAD_WEATHER'});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);