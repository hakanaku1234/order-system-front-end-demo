import React from 'react';
import {connect} from 'react-redux'
import {loginAction} from '../actions/login';
import ShopList from './ShopList';

const LoginForm = ({login, dispatch}) => {
  if (login.success) {
    return (
      <ShopList />
    )
  }

  let phone, vcode;
  return (
    <form
      className="form"
      onSubmit={
        e => {
          e.preventDefault();
          dispatch(loginAction.login(phone.value, vcode.value));
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
};

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(
  mapStateToProps
)(LoginForm)
