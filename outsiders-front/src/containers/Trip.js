import { connect } from 'react-redux';
import Trips from '../components/Trips';

// STATES that we give to Props (Trips)
const mapStateToProps = (state) => ({
  trips: state.trips.list,
  isLoaded: state.trips.isLoaded,
  // loadTrips: state.trips.list.length = 0,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadTripsData: () => {
    dispatch({ type: 'GET_TRIPS'});
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Trips);