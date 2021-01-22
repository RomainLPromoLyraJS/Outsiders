import { connect } from 'react-redux';

import Trips from '../components/Trips';

// STATES that we give to Props (Trips)
const mapStateToProps = (state) => ({
  trips: state.trips.list,
});

export default connect(mapStateToProps, null)(Trips);