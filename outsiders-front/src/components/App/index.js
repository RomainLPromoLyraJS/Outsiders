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
      <Footer />
    </div>
  );
}

export default App;
