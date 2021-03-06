// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import DashboardSports from '../components/BackOffice/DashboardSports';
import {¬†changeAdminField } from '../store/action';

// STATES that we give to Props (DashboardSports)
const mapStateToProps = (state) => ({
  sports: state.sports.list,
  sportNameCreateValue: state.admin.sportNameCreate,
  sportNameModifyValue: state.admin.sportNameModify,
  sportDescriptionCreateValue: state.admin.sportDescriptionCreate,
  sportDescriptionModifyValue: state.admin.sportDescriptionModify,
  categories: state.sports.categories,
  categoryIdValue: state.admin.category_id,
  message: state.admin.message,
  show: state.show,
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
  },
  
  handleDelete: () => {
    dispatch({ type: 'DELETE_SPORT' });
  },
  
  loadSportsData: () => {
    dispatch({type: 'GET_SPORTS'});
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSports);