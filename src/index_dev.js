import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/Main';

let config = require('./config/dev');
window.__CONFIG__ = config;

// Render the main component into the dom
ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('app'));
