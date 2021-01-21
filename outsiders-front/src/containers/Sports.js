// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Sports from '../components/Sports';

const mapStateToProps = (state) => ({
  categories: state.sports.categories,
});

export default connect(mapStateToProps)(Sports);