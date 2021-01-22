import { connect } from 'react-redux';

import Trips from '../components/Trips';


const mapStateToProps = (state) => ({
  trips: state.trips.list,
});

export default connect(mapStateToProps)(Trips);