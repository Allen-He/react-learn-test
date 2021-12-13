import { fork, take, cancel, delay, put, cancelled } from 'redux-saga/effects'
import { actionTypes, increase } from '../action/counter'

/** 流程控制模式（流程：自动增加 -> 停止 -> 自动增加 -> 停止 -> ...） */
function* autoIncreaseAndStopHandle() {
  let task = null;
  while(true) {
    yield take(actionTypes.autoIncrease);
    task = yield fork(function* () {
      // while(true) {
      //   yield delay(1000);
      //   yield put(increase());
      // }
      try {
        while(true) {
          yield delay(1000);
          yield put(increase());
        }
      } finally {
        if(yield cancelled()) { //判断当前任务是否被cancel，若是则可以做一些额外的事情（利用try-finally的特性）
          console.log("自动增加任务被取消掉了！！！");
        }
      }
    });
    yield take(actionTypes.stopAutoIncrease);
    yield cancel(task);
  }
}

export default function* counterTask() {
  yield fork(autoIncreaseAndStopHandle);
  console.log('正在监听autoIncrease、stopAutoIncrease');
}
