import { connect } from 'react-redux';

import Trips from '../components/Trips';


const mapStateToProps = (state) => ({
  trips: state.trip.trips,
});

export default connect(mapStateToProps)(Trips);