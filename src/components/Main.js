require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import cookie from 'react-cookie';

import List from './List';
import LoginPanel from './LoginPanel';


export default class AppComponent extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      userToken: null
    }

    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentWillMount() {
    console.log(cookie.load('userToken'))
    this.state = {
      userToken: cookie.load('userToken')
    };
  }

  onLogin(userToken) {
    this.setState({ userToken });
    cookie.save('userToken', userToken, { path: '/' });
  }

  onLogout() {
    cookie.remove('userToken');
  }


  render() {
    if (!this.state.userToken) {
      return (
        <LoginPanel onSuccess={this.onLogin} />
      );
    }

    return (
      <List className="list" />
    );
  }
}

AppComponent.defaultProps = {
};
