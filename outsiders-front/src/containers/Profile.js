// == Package Imports
import { connect } from 'react-redux';

// == Local imports
import Profile from '../components/Profile';

const mapStateToProps = (state) => ({
    usernameValue: state.auth.username,
    descriptionValue: state.auth.description,
    isConnected: state.auth.isLogged,


  
});

export default connect(mapStateToProps)(Profile);