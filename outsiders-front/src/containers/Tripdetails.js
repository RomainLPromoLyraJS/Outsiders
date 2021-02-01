// Import package
import { connect } from 'react-redux';

// Local import
import Tripdetails from '../components/Tripdetails';
import { changeMessageField } from '../store/action';

// We need to use ownProps (params) to get utils and withRouter
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  trip: state.trips.currentTrip,
  isLoaded: state.trips.isLoaded,
  messageValue: state.trips.messageValue,
  userId: state.auth.id,
  username: state.auth.username,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value) => {
    dispatch(changeMessageField(value));
  },

  changeLoader: () => {
    dispatch({ type: 'CHANGE_LOADING' });
  },
  
  handleDelete: () => {
    dispatch({type: 'DELETE_TRIP'});
  },

  handleJoin: () => {
    dispatch({type: 'CHANGE_LOADING'});
    dispatch({type: 'JOIN_TRIP'});
  },

  handleLeave: () => {
    dispatch({type: 'CHANGE_LOADING'});
    dispatch({type: 'LEAVE_TRIP'});
  },

  handleNewMessage: () => {
    dispatch({type: 'NEW_MESSAGE'});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tripdetails);
