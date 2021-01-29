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
  titleValue: state.trips.currentTrip.trip_title,
  dateValue: state.trips.currentTrip.date,
  fromValue: state.trips.currentTrip.from,
  toValue: state.trips.currentTrip.to,
  priceValue: state.trips.currentTrip.price,
  timeValue: state.trips.currentTrip.time,
  descriptionValue: state.trips.currentTrip.trip_description,
  durationValue: state.trips.currentTrip.duration,
  minimumValue: state.trips.currentTrip.minimum,
  placesValue: state.trips.currentTrip.places,
  isLoaded: state.trips.isLoaded,
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