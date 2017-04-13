require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
    this.state = {
      userToken: cookie.load('userToken')
    };
  }

  onLogin(userToken) {
    this.setState({ userToken });
    cookie.save('userToken', userToken, { path: '/' });
  }

  onLogout() {
    cookie.remove('userToken', { path: '/' });
  }


  render() {
    if (!this.state.userToken) {
      return (
        <MuiThemeProvider>
          <LoginPanel onSuccess={this.onLogin} />
        </MuiThemeProvider>
      );
    }

    return (
      <MuiThemeProvider>
        <List className="list" data="data" />
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {
};
