/**
 * @description
 * @author Zail
 *
 */

import {connect} from 'react-redux';
import {loginValidation} from '../actions/Main';

const LoginForm = ({ dispatch }) => {
  let phone, vcode;

  return (
    <form className="form" onsubmit={e => {
      dispatch(loginValidation({
        phone: phone.value,
        vcode: vcode.value
      }));

      e.stopPropagation();
      e.preventDefault();
    }}>
      <div className="form-group">
        <input
          ref={node => {phone = node}}
          type="text"
          className="form-control"
          placeholder="请输入手机号码."/>
      </div>
      <div className="form-group">
        <input
          ref={node => {vcode = node}}
          type="text"
          className="form-control"
          placeholder="请输入验证码."/>
      </div>
      <div className="form-group">
        <button className="btn btn-danger" type="submit">登录</button>
      </div>
    </form>
  )
};

export default connect()(LoginForm)
