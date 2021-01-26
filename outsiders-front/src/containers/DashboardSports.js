// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import DashboardSports from '../components/BackOffice/DashboardSports';
import { changeAdminField } from '../store/action';

// STATES that we give to Props (DashboardSports)
const mapStateToProps = (state) => ({
  sports: state.sports.list,
  sportNameValue: state.admin.sportName,
  sportDescriptionValue: state.admin.sportDescription,
  categories: state.sports.categories,
  categoryIdValue: state.admin.category_id,
});
// ACTIONS/FUNCTIONS that we give to Props (DashboardSports)
const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(changeAdminField(value, name));
  },

  handleCreate: () => {
    dispatch({ type: 'CREATE_SPORT' });
    },
  handleModify: () => {
    dispatch({ type: 'MODIFY_SPORT' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSports);