import {combineReducers} from 'redux';
import {loginReducer} from './login';
import {productReducer} from './product';

export default combineReducers({
  loginReducer,
  productReducer
})
