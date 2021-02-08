// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Login from '../components/Login';
import { changeAuthField } from '../store/action';

// STATES that we give to Props (Login)
const mapStateToProps = (state) => ({
  emailValue: state.auth.email,
  passwordValue: state.auth.password,
  isLogged: state.auth.isLogged,
  loginError: state.auth.loginError,
});
// ACTIONS/FUNCTIONS that we give to Props (Login)
const mapDispatchToProps = (dispatch) => ({
  closeModal: () => {
    dispatch({type: 'CLOSE_LOGIN_MODAL'});
  },
  
  handleChange: (value, name) => {
    dispatch(changeAuthField(value, name));
  },

  handleLogin: () => {
    // send action to do request LOGIN
    // action => MW => request
    dispatch({ type: 'LOGIN' });
  },

  handleLogout: () => {
    dispatch({ type: 'LOGOUT' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

