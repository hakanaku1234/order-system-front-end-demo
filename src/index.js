import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/Main';

let config = require('./config/dist');
window.__CONFIG__ = config;

// Render the main component into the dom
ReactDOM.render(
  <App />,
  document.getElementById('app'));
