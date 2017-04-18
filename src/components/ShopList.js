import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/login';

const ShopList = ({products, formClick}) => {
  return (
    <div>{products.login.phone}</div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state
  }
}

const mapDsipatchToProps = (dispatch) => {
  return {
    formClick: (id) => {
      dispatch(login('123123'));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDsipatchToProps
)(ShopList)
