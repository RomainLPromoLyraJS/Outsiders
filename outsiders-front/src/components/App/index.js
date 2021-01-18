// Import React app package
import React from 'react';

// Import Styles
import './App.css';

// Import Components
import Header from '../Header/header';
import Main from '../Main/main';
import Footer from '../Footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
