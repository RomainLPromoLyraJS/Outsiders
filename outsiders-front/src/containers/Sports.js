// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Sports from '../components/Sports';

// STATES that we give to Props (Sports)
const mapStateToProps = (state) => ({
  categories: state.sports.categories,
});

export default connect(mapStateToProps, null)(Sports);