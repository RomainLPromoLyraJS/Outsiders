import { connect } from 'react-redux';
import Trips from '../components/Trips';

// STATES that we give to Props (Trips)
const mapStateToProps = (state) => ({
  trips: state.trips.list,
  isLoaded: state.trips.isLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  loadTripsData: () => {
    dispatch({ type: 'GET_TRIPS'});
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Trips);