/**
 *
 *
 */

// 登录 action
export const login = (phone, vcode) => {
  return {
    type: 'LOGIN',
    phone,
    vcode
  }
};
