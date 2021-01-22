// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import App from '../components/App';

const mapDispatchToProps = (dispatch) => ({
  loadSportsData: () => {
    dispatch({type: 'GET_SPORTS'});
  },
});

export default connect(null, mapDispatchToProps)(App);