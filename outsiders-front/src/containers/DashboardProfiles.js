// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import DashboardProfiles from '../components/BackOffice/DashboardProfiles';

const mapStateToProps = (state) => ({
    userList: state.admin.userList,
});

const mapDispatchToProps = (dispatch) => ({
  loadUsersData: () => {
    dispatch({type: 'GET_USERS'});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardProfiles);