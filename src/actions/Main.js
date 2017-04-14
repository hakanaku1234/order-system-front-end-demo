/**
 * @description 主 actions
 * @author Zail
 *
 */

// 表单验证 action
export const loginValidation = (formData = {}, success = false, errorName = '', errorMessage = '') => {
  return {
    type: 'LOGIN_VALIDATION',
    formData,
    success,
    errorName,
    errorMessage
  }
};

// 登录 action
export const login = (token = '') => {
  return {
    type: 'LOGIN',
    token
  }
};


