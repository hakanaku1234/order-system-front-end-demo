/**
 * @description 主 reducers
 * @author Zail
 *
 * 响应的抽象
 * 纯方法
 * 传入旧状态和action
 * 返回新状态
 *
 */

// 主 reducer
export const main = (state, action) => {
  switch(action.type) {
    case 'LOGIN': {
      return {
        token: state.token
      }
    }
    case 'LOGIN_VALIDATION': {
      let errorMessage = '';
      if (!action.success) {
        errorMessage = '输入不能为空.';
        if (action.errorName == 'phone') errorMessage = '手机号码格式不正确, 请重新输入';
      }
      return {
        success: state.success,
        errorMessage
      }
    }
    default:
      return state;
  }
};
