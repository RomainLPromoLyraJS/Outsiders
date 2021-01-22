// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Nav from '../components/Nav';

// STATES that we give to Props (Nav)
const mapStateToProps = (state) => ({
  emailValue: state.auth.email,
  passwordValue: state.auth.password,
  isLogged: state.auth.isLogged
});
// ACTIONS/FUNCTIONS that we give to Props (Nav)
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch({ type: 'LOGOUT' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);