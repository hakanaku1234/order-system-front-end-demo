const initialState = {
  phone: '',
  vcode: '',
  success: false,
  errorMessage: ''
}

export const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      let success = state.success;
      let errorMessage = state.errorMessage;
      if(action.phone && /^1[3|4|5|7|8][0-9]\d{8}$/.test(action.phone)) {
        success = true;
        errorMessage = '';
      } else {
        success = false;
        errorMessage = '手机号码格式不正确.';
      }
      return {
        phone: action.phone,
        vcode: action.vcode,
        success,
        errorMessage
      }
    }
    default: {
      return state;
    }
  }
}
