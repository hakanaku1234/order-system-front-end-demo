import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {main} from './reducers/Main';

import App from './components/Main';

let store = createStore(main);

let config = require('./config/dev');
window.__CONFIG__ = config;

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));
