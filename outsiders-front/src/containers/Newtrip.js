import { connect } from 'react-redux';

// -- local imports
import Newtrip from '../components/Newtrip';
import { changeCreateField } from '../store/action';

// STATES that we give to Props (NewTrip)
const mapStateToProps = (state) => ({
  sports: state.sports.list,
  titleValue: state.trips.title,
  dateValue: state.trips.date,
  fromValue: state.trips.from,
  toValue: state.trips.to,
  priceValue: state.trips.price,
  timeValue: state.trips.time,
  descriptionValue: state.trips.description,
  durationValue: state.trips.duration,
  minimumValue: state.trips.minimum,
  placesValue: state.trips.places,
  isLoaded: state.trips.isLoaded,
});
// ACTIONS/FUNCTIONS that we give to Props (NewTrip)
const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(changeCreateField(value, name));
  },

  handleCreate: () => {
    dispatch({ type: 'HANDLE_CREATE' });
  },

  // loadTripsData: () => {
  //   dispatch({ type: 'GET_TRIPS'});
  //   dispatch({ type: 'CHANGE_LOADING'});
  // }

});

export default connect(mapStateToProps, mapDispatchToProps)(Newtrip);