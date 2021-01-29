// Import package
import { connect } from 'react-redux';

// Local import
import Tripdetails from '../components/Tripdetails';

// We need to use ownProps (params) to get utils and withRouter
const mapStateToProps = (state) => ({
  trip: state.trips.currentTrip,
  isLoaded: state.trips.isLoaded,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  changeLoader: () => {
    dispatch({ type: 'CHANGE_LOADING' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tripdetails);
