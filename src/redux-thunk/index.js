/**
 * 该函数返回一thunk中间件
 * @param {*} extra 额外参数，当action为函数时，可接收该参数
 * @returns thunk中间件函数
 */
function createThunkMiddleware(extra) {
  return store => next => action => {
    if(typeof action === 'function') {
      return action(store.dispatch, store.getState, extra); //thunk中，return的目的是：与action函数的返回值保持一致
    }
    return next(action);
  }
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
