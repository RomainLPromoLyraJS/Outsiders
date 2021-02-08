// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Sports from '../components/Sports';
import { changeSportField } from '../store/action';

// STATES that we give to Props (Sports)
const mapStateToProps = (state) => ({
  categories: state.sports.categories,
});

const mapDispatchToProps = (dispatch) => ({
  
  sportTitle: (title) => {
    dispatch(changeSportField(title));
  },
  
  handleSearch: () => {
    dispatch({ type: 'HANDLE_SEARCH' });
    dispatch({ type: 'CHANGE_LOADING'})
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Sports);