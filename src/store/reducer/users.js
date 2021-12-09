/* eslint-disable import/no-anonymous-default-export */
import { ADD_USER_TYPE, DELETE_USER_TYPE, SET_ISLOADING_TYPE, SET_USER_TYPE, UPDATE_USER_TYPE } from "../action/usersAction"

const initialState = {
  isLoading: false,
  datas: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER_TYPE:
      return {
        ...state,
        datas: [...state.datas, payload]
      };
    case DELETE_USER_TYPE:
      return {
        ...state,
        datas: state.datas.filter(it => it.id !== payload)
      };
    case UPDATE_USER_TYPE:
      return {
        ...state,
        datas: state.datas.map(it => it.id === payload.id ? {...it, ...payload} : it)
      };
    case SET_USER_TYPE: 
      return {
        ...state,
        datas: payload
      };
    case SET_ISLOADING_TYPE:
      return {
        ...state,
        isLoading: payload
      }
    default:
      return state;
  }
}
