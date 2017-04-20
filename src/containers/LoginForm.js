/**
 * @author zail
 * @email zzzzail@163.com
 * @date 2017/4/20
 * @description
 */

import React from 'react';
import {connect} from 'react-redux';
import {
  loginRequestAction,
  loginFailureAction,
  loginSuccessAction
} from '../actions/asyncLoginAction';

const LoginForm = ({dispatch}) => {
  let phone, vcode;

  return (
    <form
      className="form"
      onSubmit={
        e => {
          e.preventDefault();
          dispatch(loginRequestAction({
            phone: phone.value,
            vcode: vcode.value
          }));
        }
      }>
      <div className="form-group">
        <input
          ref={node => phone = node}
          name="phone"
          type="text"
          className="form-control"/>
      </div>
      <div className="form-group">
        <input
          ref={node => vcode = node}
          name="vcode"
          type="text"
          className="form-control"/>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-danger">登录</button>
      </div>
    </form>
  )
}

export default connect()(LoginForm)
