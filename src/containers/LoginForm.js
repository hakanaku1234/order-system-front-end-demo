/**
 * @description 登录表单
 * @author Zail
 *
 */

import React, {Component} from 'react';

const myFetch = require('../utils/fetch');

export default class LoginForm extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      phone: '',
      vcode: ''
    };

    this._login = this._login.bind(this);
    this._isPhone = this._isPhone.bind(this);
  }

  _login() {
    if (!this._isPhone(this.state.phone) || !this.state.vcode) {
      return false;
    }
    let prefix = window.__CONFIG__.default.api.prefix;
    let _onSuccess = this.props.onSuccess;
    let formData = new FormData();
    formData.append('phone', this.state.phone);
    myFetch.post(prefix + '/user', formData)
      .then(function (data) {
        if (data) {
          _onSuccess(data);
        }
      })
  }

  _isPhone(phone) {
    if (phone && /^1[3|4|5|8|][0-9]\d{8}$/.test(phone)) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    let {className} = this.props;

    return (
      <div className={className}>
        <div className="form-group">
          <input
            className="form-control"
            name="phone"
            onChange={e => {
              this.setState({
                phone: e.target.value
              })
            }}
            value={this.state.phone}
            placeholder="请输入手机号码"/>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="vcode"
            onChange={e => {
              this.setState({
                vcode: e.target.value
              })
            }}
            value={this.state.vcode}
            placeholder="请输入验证码"/>
        </div>
        <div className="form-group">
          <button
            className="btn btn-danger"
            onClick={this._login}
            label="登录">
            登录
          </button>
        </div>
      </div>
    );
  }
}
