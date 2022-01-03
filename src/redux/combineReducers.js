import isPlainObject from './utils/isPlainObject'
import actionTypes from './utils/actionTypes'

/**
 * 实现combineReducers功能
 * @param {object} reducers 
 */
export default function combineReducers(reducers) {
  // 验证reducers
  verifyReducers(reducers);

  // 返回一个reducer函数
  return function (state = {}, action) {
    const newState = {};
    for (const key in reducers) {
      if (Object.hasOwnProperty.call(reducers, key)) {
        const reducer = reducers[key];
        newState[key] = reducer(state[key], action);
      }
    }
    return newState;
  }
}


/** 验证reducers，若不符合要求，则抛出错误；否则，啥也不做 */
function verifyReducers(reducers) {
  if(typeof reducers !== 'object') {
    throw new TypeError('reducers must be an object');
  }
  if(!isPlainObject(reducers)) {
    throw new TypeError('reducers must be a plain object');
  }
  // 验证reducer的返回结果是不是undefined，如果是，则抛出错误
  for (const key in reducers) {
    if (Object.hasOwnProperty.call(reducers, key)) {
      const reducer = reducers[key];
      // 调用reducer并传递一个特殊的action
      let state = reducer(undefined, {
        type: actionTypes.ININ()
      });
      if(state === undefined) {
        throw new TypeError('reducer must not return undefined');
      }
      state = reducer(undefined, {
        type: actionTypes.UNKNOWN()
      });
      if(state === undefined) {
        throw new TypeError('reducer must not return undefined');
      }
    }
  }
}
