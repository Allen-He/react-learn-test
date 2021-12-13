import { fork, take, delay, put, race, call } from 'redux-saga/effects'
import { actionTypes, increase } from '../action/counter'

/** 使用race指令实现，类似于“流程控制” */
function* autoIncreaseAndStopHandle() {
  while(true) {
    yield take(actionTypes.autoIncrease); //只监听autoIncrease
    yield race({
      autoIncrease: call(function* () {
        while(true) {
          yield delay(1000);
          yield put(increase());
        }
      }),
      stop: take(actionTypes.stopAutoIncrease)
    });
  }
}

export default function* counterTask() {
  yield fork(autoIncreaseAndStopHandle);
  console.log('正在监听autoIncrease、stopAutoIncrease');
}
