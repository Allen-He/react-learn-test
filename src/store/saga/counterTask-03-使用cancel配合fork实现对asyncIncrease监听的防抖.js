import { delay, put, fork, take, cancel } from 'redux-saga/effects'
import { actionTypes, increase } from '../action/counter'

/** 监听到asyncIncrease后，异步增加；多次监听到该action时，先cancel掉之前的再开启新的，即在一定时间内最后一次监听到的为准（防抖） */
function* asyncIncreaseHandle(action) {
  let task = null;
  while(true) {
    yield take(actionTypes.asyncIncrease);
    if(task) {
      yield cancel(task);
    }
    task = yield fork(function* () {
      yield delay(1500);
      yield put(increase());
    });
  }
}

export default function* counterTask() {
  yield fork(asyncIncreaseHandle);
  console.log('正在监听asyncIncrease');
}
