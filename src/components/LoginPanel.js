/**
 * @description 登录
 * @author Zail
 *
 */


import React from 'react';
import {
  TextField,
  AppBar,
  RaisedButton
} from 'material-ui';

let myFetch = require('../utils/fetch');

export default class LoginPanel extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      phone: '',
      vcode: ''
    };

    this._login = this._login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  _login() {
    let onSuccess = this.props.onSuccess;
    let prefix = window.__CONFIG__.default.api.prefix;
    myFetch.post(prefix + '/user', {
      phone: this.state.phone
    })
      .then(function (data) {
        if (data) {
          onSuccess(data);
        }
      })
  }

  handleChange(event) {
    let name = event.target.getAttribute('name');
    let _obj = {};
    _obj[name] = event.target.value;
    this.setState(_obj);

    event.stopPropagation();
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <AppBar title="登录"/>
        <div style={{textAlign: 'center', padding: '20px'}}>
          <TextField
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
            style={{width: '100%'}}
            hintText="请输入手机号码"/>
          <TextField
            name="vcode"
            onChange={this.handleChange}
            value={this.state.vcode}
            style={{width: '100%'}}
            hintText="请输入验证码"/>
          <RaisedButton
            onMouseDown={this._login}
            label="登录"
            primary={true}
            style={{marginTop: 12, width: '100%'}}/>
        </div>
      </div>
    );
  }
}
