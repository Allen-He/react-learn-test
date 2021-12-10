import { isPlainObject, isString } from 'loadsh'
import isPromise from 'is-promise'

/** 手写实现redux-promise */
const promiseMiddleware = ({ dispatch }) => next => action => {
  if(!isFSA(action)) { //如果不是一个标准的action
    // 若action是一个promise，则将其resolve的值dispatch；否则，不做任何处理，直接移交给下一个中间件
    return isPromise(action) ? action.then(dispatch) : next(action);
  }
  //如果是一个标准的action
  return isPromise(action.payload)
    ? action.payload.then(payload => dispatch({...action, payload})).catch(err => dispatch({...action, payload: err, error: true}))
    : next(action);
}

/** 判断action是否为一个flux标准的action */
function isFSA(action) {
  // 1. action必须是一个平面对象
  // 2. action.type必须是一个字符串
  // 3. action的属性不能包含其他非标准属性，标准属性有：type | payload | error | meta
  return isPlainObject(action)
    && isString(action.type)
    && Object.keys(action).every(key => ['type', 'payload', 'error', 'meta'].includes(key));
}

export default promiseMiddleware;
