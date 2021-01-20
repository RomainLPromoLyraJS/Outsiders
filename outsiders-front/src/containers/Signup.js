// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Signup from '../components/Signup';
import { changeAuthField } from '../store/action';

// StateToProps
const mapStateToProps = (state) => ({
  emailValue: state.auth.email,
  passwordValue: state.auth.password,
  firstnameValue: state.auth.firstname,
  lastnameValue: state.auth.lastname,
  usernameValue: state.auth.username,
  descriptionValue: state.auth.description
});


const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(changeAuthField(value, name));
  }  
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);