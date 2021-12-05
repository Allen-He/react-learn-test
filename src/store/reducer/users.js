/* eslint-disable import/no-anonymous-default-export */
import { ADD_USER_TYPE, DELETE_USER_TYPE, UPDATE_USER_TYPE } from "../action/usersAction"
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {id: uuidv4(), name: 'hhh', phone: 666},
  {id: uuidv4(), name: 'xxx', phone: 999}
]

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER_TYPE:
      return [...state, payload];
    case DELETE_USER_TYPE:
      return state.filter(it => it.id !== payload);
    case UPDATE_USER_TYPE:
      return state.map(it => it.id === payload.id ? {...it, ...payload} : it);
    default:
      return state;
  }
}
