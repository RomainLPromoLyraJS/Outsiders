// Import package
import { connect } from 'react-redux';

// Local import
import Tripdetails from '../components/Tripdetails';

// We need to use ownProps (params) to get utils and withRouter
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  trip: state.trips.currentTrip,
  isLoaded: state.trips.isLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  handleDelete: () => {
    dispatch({type: 'DELETE_TRIP'});
  },

  handleJoin: () => {
    dispatch({type: 'CHANGE_LOADING'});
    dispatch({type: 'JOIN_TRIP'});
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tripdetails);