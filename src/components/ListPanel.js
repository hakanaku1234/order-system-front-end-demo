/**
 * @description 商品列表
 * @author Zail
 *
 */

import React from 'react';
import List from '../containers/List';

export default class ListPanel extends React.Component {
  constructor(...args) {
    super(...args);

  }

  render() {
    return (
      <List />
    )
  }

}
