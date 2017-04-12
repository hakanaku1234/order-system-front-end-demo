require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import List from './List';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="index">
        <List className="list" data="data" />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
