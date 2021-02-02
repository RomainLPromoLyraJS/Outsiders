// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import BackOffice from '../components/BackOffice';

// STATES that we give to Props (Admin)
const mapStateToProps = (state) => ({
  role: state.auth.role_id,
  firstname: state.auth.firstname,
  lastname: state.auth.lastname,
});

export default connect(mapStateToProps)(BackOffice);