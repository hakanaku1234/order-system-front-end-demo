import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';

import reducer from './reducers';
import App from './containers/App';

const logger = createLogger();
let store = createStore(reducer, applyMiddleware(logger));

let config = require('./config/dev');
window.__CONFIG__ = config;

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));
