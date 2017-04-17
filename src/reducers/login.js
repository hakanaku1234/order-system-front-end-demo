const initialState = {
  phone: '',
  vcode: '',
  success: false,
  errorMessage: ''
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_VALIDATE_PHONE': {
      if (action.phone && /^1[3|4|5|8][0-9]\d{8}$/.test(action.phone)) {
        return {
          phone: action.phone,
          success: true,
          errorMessage: ''
        }
      } else {
        return {
          phone: action.phone,
          success: false,
          errorMessage: '手机号码格式不正确.'
        }
      }
    }
    case 'LOGIN': {
      return {
        phone: action.phone,
        vcode: state.vcode,
        success: state.success,
        errorMessage: state.errorMessage
      }
    }
    default: {
      return state;
    }
  }
}

export default login;
