// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Profile from '../components/Profile';

// STATES that we give to Props (Profile)
const mapStateToProps = (state) => ({
	user: state.auth,
	isLoaded: state.trips.isLoaded,
});

const mapDispatchToProps = (dispatch) => ({
	handleDeleteUser: () => {
		dispatch({type: 'DELETE_OWN_PROFIL'});
	},

	getUserTrips: () => {
		dispatch({type: 'CHANGE_LOADING'});
		dispatch({type: 'GET_USER_TRIPS'});
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);