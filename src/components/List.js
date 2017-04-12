/**
 * @description 商品列表
 * @author Zail
 *
 */

import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);

    console.log('init');
    this.state = {
      title: 'heheda'
    };

    this._renderRow = this._renderRow.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  _renderRow(data) {
    console.log('_renderRow', this.state.title);
  }

  render() {
    let {data, ...other} = this.props;

    return (
      <div {...other}>hahah {data} {this.state.title}</div>
    )
  }

}

export default List;
