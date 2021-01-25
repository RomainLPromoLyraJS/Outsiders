// Import package
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Local import
import { getTripBySlug } from '../../src/utils';
import Tripdetails from '../components/Tripdetails';

// We need to use ownProps (params) to get utils and withRouter
const mapStateToProps = (state, ownProps) => ({
  /**
   * Get trip by slug 
   * state.trips.list = all trips
   * => ownProps.match = prop create by withRouter
   * in ownProps, we have acces to all props including those of withRouter
   */

   trip: getTripBySlug(state.trips.list, ownProps.match.params.slug),
});

// with connect Tripdetails have acces to props.state (trip title)
const container = connect(mapStateToProps)(Tripdetails);

// with withRouter container have acces to props.router (slug url)
const containerWithRouter = withRouter(container);

export default containerWithRouter;