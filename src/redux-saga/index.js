import runSaga from "./runSaga"

/**
 * 用于创建一个saga中间件函数
 */
export default function createSagaMiddleware() {
  /** saga中间件函数 */
  return function sagaMiddleware(store) {
    const env = { // saga任务执行期间共享的环境数据
      store,
    }
    sagaMiddleware.run = runSaga.bind(null, env);
    return function (next) {
      return function (action) {
        return next(action);
      }
    }
  }
}
