import React from 'react';
import {connect} from 'react-redux';
import List from './List';

const ShopList = ({listData}) => {
  console.log('listData', listData);

  return (
    <div>
      {
        listData.map(l => {
          return <List key={l.id} {...l} />
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    listData: state.list.list
  }
}

export default connect(
  mapStateToProps
)(ShopList)
