/**
 *
 *
 */

// 登录 action
export const loginAction = (phone, vcode) => {
  return {
    type: 'LOGIN',
    phone,
    vcode
  }
};
