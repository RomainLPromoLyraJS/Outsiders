// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Profile from '../components/Profile';

// STATES that we give to Props (Profile)
const mapStateToProps = (state) => ({
    username: state.auth.username,
    description: state.auth.description,
    isConnected: state.auth.isLogged,
    trips: state.trips.list,
});

export default connect(mapStateToProps)(Profile);