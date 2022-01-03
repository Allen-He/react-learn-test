import compose from './compose'

/**
 * 用于注册中间件
 * @param  {...function} middlewares
 */
export default function applyMiddleware(...middlewares) {
  return function (createStore) {
    return function (reducer, defaultState) {
      const store = createStore(reducer, defaultState);
      let dispatch = () => {
        throw new Error('目前正在构造并应用中间件，还不能使用dispatch');
      }
      const simpleStore = {
        getState: store.getState,
        dispatch: (...args) => dispatch(...args) //该箭头函数中调用的dispatch最初指向“上述初始化的会抛出错误的函数”，待最终的store创建完毕之后会指向最新的、经过包裹的原始dispatch
      }
      const dispatchCreators = middlewares.map(mid => mid(simpleStore));
      dispatch = compose(...dispatchCreators)(store.dispatch);
      return {
        ...store,
        dispatch,
      };
    }
  }
}
