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
});
// ACTIONS/FUNCTIONS that we give to Props (NewTrip)
const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(changeTripField(value, name));
  },

  handleSubmit: () => {
    dispatch({type: 'CHANGE_LOADING'});
    dispatch({ type: 'CREATE_TRIP' });
  },
  
  resetForm: () => {
    dispatch({type: 'DELETE_TRIP_SUCCESS'});
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Newtrip);