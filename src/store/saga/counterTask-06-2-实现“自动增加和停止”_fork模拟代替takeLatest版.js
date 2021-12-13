import { fork, take, cancel, delay, put, takeEvery } from 'redux-saga/effects'
import { actionTypes, increase } from '../action/counter'

let task = null;

function* stop () { //停止“自动增加”
  if(task) {
    yield cancel(task);
  }
}

function* autoIncreaseHandle() {
  while(true) {
    yield take(actionTypes.autoIncrease);
    yield* stop();
    task = yield fork(function* () {
      while(true) {
        yield delay(1000);
        yield put(increase());
      }
    });
  }
}

function* stopAutoIncreaseHandle() {
  yield* stop();
}

export default function* counterTask() {
  yield fork(autoIncreaseHandle);
  yield takeEvery(actionTypes.stopAutoIncrease, stopAutoIncreaseHandle);
  console.log('正在监听autoIncrease、stopAutoIncrease');
}
