import isPlainObject from './utils/isPlainObject'
import actionTypes from './utils/actionTypes'

/**
 * 实现createStore功能
 * @param {function} reducer reducer
 * @param {any} defaultState 默认的状态值
 */
export default function createStore(reducer, defaultState) {

  let currentReducer = reducer, //当前的reducer
      currentState = defaultState; //当前的state

  const listeners = []; //存储当前已添加的订阅者（监听器）

  /** 用于分发一个action */
  function dispatch(action) {
    if(!isPlainObject(action)) {
      throw new TypeError('action must be a plain object');
    }
    if(action.type === undefined) {
      throw new TypeError('action must has a property of "type"');
    }
    currentState = currentReducer(currentState, action);
    // 触发dispatch并改变状态后，触发已添加的订阅者（监听器）
    for (const listener of listeners) {
      listener();
    }
  }

  /** 用于获取store的当前状态 */
  function getState() {
    return currentState;
  }

    /** 添加一个订阅者（监听器） */
  function subscribe(listener) {
    if(typeof listener !== 'function') {
      throw new TypeError('listener must be a function');
    }
    listeners.push(listener);
    return function () {
      // 该返回的函数，用于将该listener从listeners中移除
      const index = listeners.indexOf(listener);
      index !== -1 && listeners.splice(index, 1);
    }
  }
  
  function replaceReducer(nextReducer) {
    if(typeof nextReducer !== 'function') {
      throw new TypeError('nextReducer must be a function');
    }
    currentReducer = nextReducer;
    dispatch({
      type: actionTypes.REPLACE()
    });
  }

  // 创建仓库时，需要分发一次初始的action，以利用reducer初始化状态值（action的type值，形如：@@redux/INITx.m.2.f.9）
  dispatch({
    type: actionTypes.ININ()
  });

  return {
    dispatch,
    getState,
    subscribe,
    replaceReducer
  }
}
