export const SET_LOGINUSER_TPYE = Symbol('set-login-user');

export const createSetLoginUserAction = (user) => ({
  type: SET_LOGINUSER_TPYE,
  payload: user
});

