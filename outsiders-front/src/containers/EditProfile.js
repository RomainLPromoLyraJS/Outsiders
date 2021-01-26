// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import EditProfile from '../components/EditProfile';
import { changeAuthField } from '../store/action';

// STATES that we give to Props (Signup)
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  firstname: state.auth.firstname,
  lastname: state.auth.lastname,
  username: state.auth.username,
  email: state.auth.email,
  password: state.auth.password,
  description: state.auth.description,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(changeAuthField(value, name));
  },

  handleSubmit: () => {
    dispatch({type: 'EDIT_USER'});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);