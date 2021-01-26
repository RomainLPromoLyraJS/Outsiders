// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Profile from '../components/Profile';

// STATES that we give to Props (Profile)
const mapStateToProps = (state) => ({
    user: state.auth,
});

export default connect(mapStateToProps)(Profile);