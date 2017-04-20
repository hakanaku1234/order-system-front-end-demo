/**
 * @author zail
 * @email zzzzail@163.com
 * @date 2017/4/20
 * @description 异步登录
 *
 */

exports.loginRequestAction = (obj) => {
  let {phone, vcode} = obj;
  return {
    type: 'LOGIN_REQUEST',
    phone,
    vcode
  }
}

exports.loginFailureAction = (obj) => {
  let {phone, vcode, err} = obj;
  return {
    type: 'LOGIN_FAILURE',
    phone,
    vcode,
    err
  }
}

exports.loginSuccessAction = (obj) => {
  let {phone, vcode, response} = obj;
  return {
    type: 'LOGIN_SUCCESS',
    phone,
    vcode,
    response
  }
}
