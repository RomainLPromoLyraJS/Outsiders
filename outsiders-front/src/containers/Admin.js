// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Admin from '../components/Admin';
import { changeAuthField } from '../store/action';

// STATES that we give to Props (Admin)
const mapStateToProps = (state) => ({
  emailValue: state.admin.email,
  passwordValue: state.admin.password,
  isLogged: state.admin.isLogged,
});
// ACTIONS/FUNCTIONS that we give to Props (Admin)
const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(changeAuthField(value, name));
  },
    handleAdmin: () => {
    dispatch({ type: 'AUTH_ADMIN' })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);