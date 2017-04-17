import React, {} from 'react';
import { connect } from 'react-redux'
import * as loginAction from '../actions/login';

const LoginForm = ({dispatch}) => {
  let phone;

  return (
    <form
      className="form"
      onSubmit={
        e => {
          console.log('login');
          dispatch(loginAction.login(phone.value));
          console.log('done');
        }
      }>
      <div className="form-group">
        <input
          ref={ node => phone = node }
          name="phone"
          type="text"
          className="form-control" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-danger">登录</button>
      </div>
    </form>
  )
};

export default connect()(LoginForm)
