/* eslint-disable import/no-anonymous-default-export */
import { SET_LOGINUSER_TPYE } from '../action/loginUserAction'

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOGINUSER_TPYE:
      return payload
    default:
      return state
  }
}

