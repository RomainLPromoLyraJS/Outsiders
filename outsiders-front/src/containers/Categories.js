// Import package
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Local import
import { getCatBySlug } from '../../src/utils';
import Categories from '../components/Categories';
import { changeSportField } from '../store/action';

// We need to use ownProps (params) to get utils and withRouter
const mapStateToProps = (state, ownProps) => ({
  /**
   * Get category by slug 
   * state.sports.categories = all cat
   * => ownProps.match = prop create by withRouter
   * in ownProps, we have acces to all props including those of withRouter
   */

   category: getCatBySlug(state.sports.categories, ownProps.match.params.slug),
});

const mapDispatchToProps = (dispatch) => ({
  loadCategoriesData: () => {
    dispatch({type: 'GET_CATEGORIES'})
  },
  sportTitle: (title) => {
    dispatch(changeSportField(title));
  },
  handleSearch: () => {
    dispatch({type: 'HANDLE_SEARCH'});
    dispatch({type: 'CHANGE_LOADING'});
  }
})

// with connect Categories have access to props.state (category title)
const container = connect(mapStateToProps, mapDispatchToProps)(Categories);

// with withrouter container have access to props.router (slug url)
const containerWithRouter = withRouter(container);

export default containerWithRouter;