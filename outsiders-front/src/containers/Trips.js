import { connect } from 'react-redux';
import Trips from '../components/Trips';

// STATES that we give to Props (Trips)
const mapStateToProps = (state) => ({
  trips: state.trips.list,
  isLoaded: state.trips.isLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getTripDetails: (tripId) => {
    dispatch({type: 'CHANGE_LOADING'});
    dispatch({type: 'GET_TRIP_DETAILS', tripId});
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Trips);