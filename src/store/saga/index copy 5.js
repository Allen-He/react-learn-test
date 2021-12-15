import { delay, put, take, fork, cancel } from '../../redux-saga/effects'
import { actionTypes, increase } from '../action/counter';

function* asyncIncrease() {
  while(true) {
    yield take(actionTypes.asyncIncrease);
    yield delay(1000);
    yield put(increase());
  }
}

export default function* rootSaga() {
  console.log('saga任务启动了');
  const task = yield fork(asyncIncrease);
  console.log('开启了一个新的任务', task);
  yield delay(5000);
  yield cancel(task);
  console.log('取消了task', task);
}
