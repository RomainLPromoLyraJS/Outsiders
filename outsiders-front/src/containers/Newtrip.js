// == Package imports == \\
import { connect } from 'react-redux';

// == Local imports == \\
import Newtrip from '../components/Newtrip';
import { changeTripField } from '../store/action';

// STATES that we give to Props (NewTrip)
const mapStateToProps = (state) => ({
  // == sports reducer == \\
  sports: state.sports.list,
  trip: state.trips.currentTrip,
  isLoaded: state.trips.isLoaded,
  isCreated: state.trips.isCreated,
});
// ACTIONS/FUNCTIONS that we give to Props (NewTrip)
const mapDispatchToProps = (dispatch) => ({

  handleChange: (value, name) => {
    dispatch(changeTripField(value, name));
  },

  handleSubmit: () => {
    dispatch({ type: 'CREATE_TRIP' });
  },

  getTripDetails: (tripId) => {
    dispatch({type: 'CHANGE_LOADING'});
    dispatch({type: 'GET_TRIP_DETAILS', tripId});
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Newtrip);