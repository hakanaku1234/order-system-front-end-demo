/**
 * @author zail
 * @email zzzzail@163.com
 * @date 2017/4/20
 * @description
 */

const initialState = {
  phone: '',
  vcode: '',
  isLogin: false,
  userToken: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST': {
      return {
        phone: action.phone,
        vcode: action.vcode,
        isLogin: false,
        userToken: ''
      }
    }
    case 'LOGIN_FAILURE': {
      return {
        phone: action.phone,
        vcode: action.vcode,
        err: action.err,
        isLogin: false,
        userToken: ''
      }
    }
    case 'LOGIN_SUCCESS': {
      return {
        phone: action.phone,
        vcode: action.vcode,
        isLogin: true,
        userToken: action.response
      }
    }
    default:
      return state;
  }
}
