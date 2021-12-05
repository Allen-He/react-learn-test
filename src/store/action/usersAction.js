export const ADD_USER_TYPE = Symbol('add-user');
export const DELETE_USER_TYPE = Symbol('delete-user');
export const UPDATE_USER_TYPE = Symbol('update-user');

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
