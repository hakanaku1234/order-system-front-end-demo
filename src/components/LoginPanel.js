/**
 * @description 登录
 * @author Zail
 *
 */

import React from 'react';

import LoginForm from '../containers/LoginForm';

export default class LoginPanel extends React.Component {
  render() {
    return (
      <div>
        <div className="title">登录</div>
        <LoginForm className="form" />
      </div>
    );
  }
}
