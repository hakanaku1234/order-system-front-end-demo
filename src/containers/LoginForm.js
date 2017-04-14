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
      isPhoneErr: false,
      phone: '',
      vcode: ''
    };

    this._login = this._login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this._isPhoneErr = this._isPhoneErr.bind(this);
  }

  _login() {
    if(this.state.isPhoneErr) {
      return false;
    }

    let onSuccess = this.props.onSuccess;
    let prefix = window.__CONFIG__.default.api.prefix;

    let formData = new FormData();
    formData.append('phone', this.state.phone);
    myFetch.post(prefix + '/user', formData)
      .then(function (data) {
        if (data) {
          onSuccess(data);
        }
      })
  }

  _isPhoneErr(phone) {
    if(phone && /^1[3|4|5|8|][0-9]\d{8}$/.test(phone)) {
      this.setState({
        isPhoneErr: false
      })
    } else {
      this.setState({
        isPhoneErr: '手机号码格式不正确.'
      })
    }
  }

  handleChange(event) {
    let name = event.target.getAttribute('name');
    let _obj = {};
    _obj[name] = event.target.value;
    this.setState(_obj);

    if (name == 'phone') {
      this._isPhoneErr(event.target.value);
    }

    event.stopPropagation();
    event.preventDefault();
  }

  render() {
    let {...props} = this.props;

    return (
      <div {...props}>
        <div className="form-group">
          <input
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
            placeholder="请输入手机号码"/>
        </div>
        <div className="form-group">
          <input
            name="vcode"
            onChange={this.handleChange}
            value={this.state.vcode}
            placeholder="请输入验证码"/>
        </div>
        <div className="form-group">
          <button
            onMouseDown={this._login}
            label="登录">
            登录
          </button>
        </div>
      </div>
    );
  }
}
