// Import package
import { connect } from 'react-redux';

// Local import
import Tripdetails from '../components/Tripdetails';

// We need to use ownProps (params) to get utils and withRouter
const mapStateToProps = (state) => ({
  trip: state.trips.currentTrip,
});

export default connect(mapStateToProps)(Tripdetails);