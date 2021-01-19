// Import React app package
import React from 'react';

// Import route from react-router-dom pckging // 
import { Route } from 'react-router-dom';




// Import Styles
import './app.scss';



// Import Components
import Header from '../Header/header';
import Home from '../Home/home';
import Footer from '../Footer/footer';
import Sports from '../Sports/sports';
import Trips from '../Trips/trips';
import Nav from '../Nav/nav';



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
