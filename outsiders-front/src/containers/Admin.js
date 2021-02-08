// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Admin from '../components/Admin';
import { changeAuthField } from '../store/action';

// STATES that we give to Props (Admin)
const mapStateToProps = (state) => ({
  emailValue: state.auth.email,
  passwordValue: state.auth.password,
  isLogged: state.auth.isLogged,
  loginError: state.auth.loginError,
});
// ACTIONS/FUNCTIONS that we give to Props (Admin)
const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(changeAuthField(value, name));
  },
    handleAdmin: () => {
    dispatch({ type: 'AUTH_ADMIN' })
  },

  closeModal: () => {
    dispatch({type: 'CLOSE_LOGIN_MODAL'});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);