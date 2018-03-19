import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import 'typeface-roboto';
import './index.css';

import App from './components/App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
unregister();
