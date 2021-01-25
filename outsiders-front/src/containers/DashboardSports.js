// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import DashboardSports from '../components/BackOffice/DashboardSports';
import { changeAdminField } from '../store/action';

// STATES that we give to Props (DashboardSports)
const mapStateToProps = (state) => ({
  sports: state.sports.list,
  sportNameValue: state.admin.sportName,
});
// ACTIONS/FUNCTIONS that we give to Props (DashboardSports)
const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(changeAdminField(value, name));
  },

//   handleSearch: () => {
//     dispatch({ type: 'HANDLE_SEARCH' });
//   }
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSports);