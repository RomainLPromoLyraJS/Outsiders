// // == Package imports == \\
// import { connect } from 'react-redux';

// // == Local imports == \\
// import Newtrip from '../components/Newtrip';
// // import { changeTripField } from '../store/action';

// // STATES that we give to Props (NewTrip)
// const mapStateToProps = (state) => ({
//   // == sports reducer == \\
//   sports: state.sports.list,
//   // == trips reducer == \\
//   titleValue: state.trips.title,
//   dateValue: state.trips.date,
//   fromValue: state.trips.from,
//   toValue: state.trips.to,
//   priceValue: state.trips.price,
//   timeValue: state.trips.time,
//   descriptionValue: state.trips.description,
//   durationValue: state.trips.duration,
//   minimumValue: state.trips.minimum,
//   placesValue: state.trips.places,
//   isLoaded: state.trips.isLoaded,
// });
// // ACTIONS/FUNCTIONS that we give to Props (NewTrip)
// const mapDispatchToProps = (dispatch) => ({

//   handleChange: (value, name) => {
//     dispatch(changeTripField(value, name));
//   },

//   handleCreate: () => {
//     dispatch({ type: 'HANDLE_CREATE' });
//   },
  
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Newtrip);