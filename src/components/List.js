/**
 * @description 商品列表
 * @author Zail
 *
 */

import React from 'react';

export default class List extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      title: 'heheda'
    };

  }

  render() {
    return (
      <div>
        {this.state.title}
      </div>
    )
  }

}
