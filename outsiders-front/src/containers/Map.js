// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Map from '../components/Map';

// STATES that we give to Props (Nav)
const mapStateToProps = (state) => ({
  from: state.trips.currentTrip.from,
  to: state.trips.currentTrip.to,
});


export default connect(mapStateToProps, null)(Map);