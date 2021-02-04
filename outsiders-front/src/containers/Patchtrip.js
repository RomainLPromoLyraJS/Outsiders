// == Package imports == \\
import { connect } from 'react-redux';

// == Local imports == \\
import Patchtrip from '../components/Patchtrip';
import { changeTripField } from '../store/action';

// STATES that we give to Props (Patchtrip)
const mapStateToProps = (state) => ({
  // == sports reducer == \\
  sports: state.sports.list,
  // == trips reducer == \\
  trip: state.trips.currentTrip,
});

// ACTIONS/FUNCTIONS that we give to Props (Patchtrip)
const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(changeTripField(value, name));
  },

  handleModify: () => {
    dispatch({type: 'CHANGE_LOADING'});
    dispatch({ type: 'HANDLE_MODIFY' });
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Patchtrip);