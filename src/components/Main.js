require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import cookie from 'react-cookie';

import ListPanel from './ListPanel';
import LoginPanel from './LoginPanel';

export default class AppComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      userToken: undefined
    };

    this._onSuccess = this._onSuccess.bind(this);
  }

  componentWillMount() {
    this.setState({
      userToken: cookie.load('userToken')
    })
  }

  _onSuccess(token) {
    this.setState({
      userToken: token
    });
    cookie.save('userToken', token, {path: '/'});
  }

  render() {
    if (!this.state.userToken) {
      return (
        <LoginPanel onSuccess={this._onSuccess}/>
      );
    }

    return (
      <ListPanel className="list"/>
    );
  }
}

AppComponent.defaultProps = {};
