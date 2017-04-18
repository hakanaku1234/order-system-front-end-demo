import React from 'react';
import {connect} from 'react-redux';

const ShopList = ({login}) => {
  return (
    <div>
      <div>{login.phone}</div>
      <div>{login.errorMessage}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    login: state.login
  }
}

export default connect(
  mapStateToProps
)(ShopList)
