import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';

import { BrowserRouter } from 'react-router-dom';

// ADD ROUTER 

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />  
    </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);
