// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Header from '../components/Header';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch({ type: 'LOGOUT' });
  },
  loadTripsData: () => {
    dispatch({ type: 'GET_TRIPS'});
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);