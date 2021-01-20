// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Login from '../components/Login';
import { changeAuthField } from '../store/action';

// StateToProps
const mapStateToProps = (state) => ({
  emailValue: state.auth.email,
  passwordValue: state.auth.password,
});


const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(changeAuthField(value, name));
  }  
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);