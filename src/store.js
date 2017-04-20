/**
 * @author zail
 * @email zzzzail@163.com
 * @date 2017/4/20
 * @description
 */

import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

const logger = createLogger();
let store = createStore(
  reducer,
  applyMiddleware(thunk, logger));

export default store;
