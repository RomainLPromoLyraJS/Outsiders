// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import App from '../components/App';


const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  admin: state.auth.role_id,
});

const mapDispatchToProps = (dispatch) => ({
  loadSportsData: () => {
    dispatch({type: 'GET_SPORTS'});
  },
  loadCategoriesData: () => {
    dispatch({type: 'GET_CATEGORIES'})
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);