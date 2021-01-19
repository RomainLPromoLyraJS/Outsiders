// == Package imports
import React from 'react';
import { Route } from 'react-router-dom';

// == Local imports
// Components
import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';
import Sports from '../Sports';
import Trips from '../Trips';
import Nav from '../Nav';
import Signup from '../Signup';



function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Route exact path='/' >
        <Home />
      </Route>
      <Route exact path='/sports' >
        <Sports />
      </Route>
      <Route exact path='/trips' >
        <Trips />
      </Route>
      <Route exact path='/signup' >
        <Signup />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
