/**
 * 实现bindActionCreators功能
 * @param {*} actionCreators 函数or对象
 * @param {*} 函数or对象
 */
export default function bindActionCreators(actionCreators, dispatch) {
  if(typeof actionCreators === 'function') {
    return getAutoDispatchActionCreator(actionCreators, dispatch);
  }else if(typeof actionCreators === 'object') {
    const res = {};
    for (const key in actionCreators) {
      if (Object.hasOwnProperty.call(actionCreators, key)) {
        const actionCreator = actionCreators[key];
        if(typeof actionCreator === 'function') {
          res[key] = getAutoDispatchActionCreator(actionCreator, dispatch);
        }
      }
    }
    return res;
  }else {
    throw new TypeError('actionCreators must be an object or function, which means action creator')
  }
}

/** 得到一个可以自动分发的“action创建函数” */
function getAutoDispatchActionCreator(actionCreator, dispatch) {
  return function(...args) {
    const action = actionCreator(...args);
    dispatch(action);
  }
}
