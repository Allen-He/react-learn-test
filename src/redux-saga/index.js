import Channel from "./Channel";
import runSaga from "./runSaga"

/**
 * 用于创建一个saga中间件函数
 */
export default function createSagaMiddleware() {
  /** saga中间件函数 */
  return function sagaMiddleware(store) {
    const env = { // saga任务执行期间共享的环境数据
      store,
      channel: new Channel() //新建一个Channel频道，方便后续添加和触发监听器
    }
    sagaMiddleware.run = runSaga.bind(null, env);
    return function (next) {
      return function (action) {
        const result = next(action);
        env.channel.put(action.type, action); //发布对应的监听器处理函数
        return result;
      }
    }
  }
}
