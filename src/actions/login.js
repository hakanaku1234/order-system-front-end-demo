/**
 *
 *
 */

// 表单验证 action
export const loginValidateForm = (phone) => {
  return {
    type: 'LOGIN_VALIDATION',
    phone
  }
};

// 登录 action
export const login = (phone) => {
  return {
    type: 'LOGIN',
    phone
  }
};
