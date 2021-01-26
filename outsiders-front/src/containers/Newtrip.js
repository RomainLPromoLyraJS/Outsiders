import { connect } from 'react-redux';

// -- local imports
import Newtrip from '../components/Newtrip';
import { changeCreateField } from '../store/action';

// STATES that we give to Props (NewTrip)
const mapStateToProps = (state) => ({
  sports: state.sports.list,
  // titleValue: state.tripedit.title,
  // dateValue: state.tripedit.date,
  // fromValue: state.tripedit.from,
  // toValue: state.tripedit.to,
  // priceValue: state.tripedit.price,
});
// ACTIONS/FUNCTIONS that we give to Props (NewTrip)
const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(changeCreateField(value, name));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Newtrip);