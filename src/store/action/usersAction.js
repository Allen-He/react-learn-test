import api from '../../services/index'

export const ADD_USER_TYPE = Symbol('add-user');
export const DELETE_USER_TYPE = Symbol('delete-user');
export const UPDATE_USER_TYPE = Symbol('update-user');
export const SET_USER_TYPE = Symbol('set-users');
export const SET_ISLOADING_TYPE = Symbol('set-isloading');

export const createAddUserAction = (user) => ({
  type: ADD_USER_TYPE,
  payload: user
})

export const createDeleteUserAction = (id) => ({
  type: DELETE_USER_TYPE,
  payload: id
})

export const createUpdateUserAction = (id, newUserData) => ({
  type: UPDATE_USER_TYPE,
  payload: {
    ...newUserData,
    id,
  }
})

export const createSetUsersAction = (users) => ({
  type: SET_USER_TYPE,
  payload: users //用户数组
})

export const createSetIsLoadingAction = (bool) => ({
  type: SET_ISLOADING_TYPE,
  payload: bool
})


/** 由于thunk的存在，允许返回的action是一个带有副作用的函数 */
export function fetchAndSetUsers() {
  return async function (dispatch, getState, extra) {
    dispatch(createSetIsLoadingAction(true)); //正在加载数据
    const { findByPage: users } = await api.getAllStusByPagination(1, 15);
    dispatch(createSetUsersAction(users));
    dispatch(createSetIsLoadingAction(false)); //数据加载成功
  }
}
