// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Login from '../components/Login';
import { changeAuthField } from '../store/action';

// StateToProps
const mapStateToProps = (state) => ({
  emailValue: state.auth.email,
  passwordValue: state.auth.password,
  // isLogged: state.auth.logged
});


const mapDispatchToProps = (dispatch) => ({
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