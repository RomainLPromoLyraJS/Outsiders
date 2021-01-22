// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import SearchBar from '../components/SearchBar';
import { changeSearchField } from '../store/action';

// STATES that we give to Props (SearchBar)
const mapStateToProps = (state) => ({
  sports: state.sports.list,
  fromValue: state.search.from,
  dateValue: state.search.date,
});
// ACTIONS/FUNCTIONS that we give to Props (SearchBar)
const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(changeSearchField(value, name));
  }  
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);