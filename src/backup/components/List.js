import React from 'react';
import {connect} from 'react-redux';

const List = ({name, text}) => {
  return (
    <div className="list">
      <div>{name}</div>
      <div>{text}</div>
    </div>
  )
}

export default connect()(List)
