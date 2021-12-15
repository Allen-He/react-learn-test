import { take } from "./take";
import { fork } from "./fork";

export function takeEvery(actionType, func, ...args) {
  return fork(function* () { //开启一个新任务
    while(true) {
      const action = yield take(actionType);
      yield fork(func, ...args.concat(action)); //再开启一个新任务处理运行func，避免阻塞对actionType的监听
    }
  });
}
