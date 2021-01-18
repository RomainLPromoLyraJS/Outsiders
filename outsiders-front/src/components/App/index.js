// Import React app package
import React, { Components } from 'react';

// Import Styles
import './App.css';

// Import Components
import './src/components/Header';
import './src/components/Main';
import './src/components/Footer';

function App() {
  return (
    <div className="App">
      <p>Je suis dans App</p>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
