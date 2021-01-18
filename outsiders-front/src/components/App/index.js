// Import React app package
import React from 'react';

// Import Styles
import './app.scss';



// Import Components
import Header from '../Header/header';
import Home from '../Home/home';
import Footer from '../Footer/footer';
// import Sports from '../Sports/sports';
// import Trips from '../Trips/trips';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
