// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Profile from '../components/Profile';

// STATES that we give to Props (Profile)
const mapStateToProps = (state) => ({
	user: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
	getUserTrips: () => {
		dispatch({type: 'CHANGE_LOADING'});
		dispatch({type: 'GET_USER_TRIPS'});
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);