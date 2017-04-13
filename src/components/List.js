/**
 * @description 商品列表
 * @author Zail
 *
 */

import React from 'react';
import RaisedButton from 'material-ui/RadioButton';

export default class List extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      title: 'heheda'
    };

    this._renderRow = this._renderRow.bind(this);
  }

  render() {
    return (
      <div>
        {this.state.title}
        <RaisedButton label="Default"/>
      </div>
    )
  }

}
