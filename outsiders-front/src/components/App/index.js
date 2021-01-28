// == Package imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// == Local imports
// Components
import Header from '../../containers/Header';
import Home from '../Home';
import Footer from '../Footer';
import Sports from '../../containers/Sports';
import Trips from '../../containers/Trip';
import Login from '../../containers/Login';
import About from '../About';
import Signup from '../../containers/Signup';
import Tripdetails from '../../containers/Tripdetails';
import Admin from '../../containers/Admin';
import Profile from '../../containers/Profile';
import Newtrip from '../../containers/Newtrip';
import Patchtrip from '../../containers/Patchtrip';




const App = ({ loadSportsData, loadCategoriesData }) => {
  // loading sports and categories data from api
  useEffect(() => {
    loadSportsData();
    loadCategoriesData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
    {/* GUEST ROUTE */}
      <Header />
      <Route exact path='/' >
        <Home />
      </Route>
      <Route exact path='/sports' >
        <Sports />
      </Route>
      <Route exact path='/sorties' >
        <Trips />
      </Route>
      <Route exact path='/signup' >
        <Signup />
      </Route>
      <Route exact path='/login' >
        <Login />
      </Route>
      <Route exact path='/about' >
        <About />
      </Route>
      <Footer />
      {/* MEMBER ROUTE */}
      <Route exact path='/sortie/:slug' >
        <Tripdetails />
      </Route>
      <Route exact path='/mon-compte' >
        <Profile />
      </Route>
      <Route exact path='/nouvelle-sortie' >
        <Newtrip />
      </Route>
      <Route exact path='/modifier-sortie' >
        <Patchtrip />
      </Route>
      {/* ADMIN ROUTE */}
      <Route exact path='/admin' >
        <Admin />
      </Route>
    </div>
  );
}

App.propTypes = {
  loadSportsData: PropTypes.func.isRequired,
};

export default App;
