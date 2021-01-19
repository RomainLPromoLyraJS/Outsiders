// Import React app package
import React from 'react';

// Import router from react-router-dom pckging // Rename BrowserRouter as Router easiest to understand

import { BrowserRouter as Router } from 'react-router-dom';

// Import Styles
import './app.scss';



// Import Components
import Header from '../Header/header';
import Home from '../Home/home';
import Footer from '../Footer/footer';
import Sports from '../Sports/sports';
import Trips from '../Trips/trips';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route path='/' />
      <Home />
      <Route path='/sports' component={Sports}/>
      <Sports />
      <Route path='/sorties' component={Trips}/>
      <Trips />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
