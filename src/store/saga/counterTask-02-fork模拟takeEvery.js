import { takeEvery, delay, put, fork, take } from 'redux-saga/effects'
import { actionTypes, decrease, increase } from '../action/counter'


function* asyncIncreaseHandle(action) {
  while(true) {
    yield take(actionTypes.asyncIncrease);
    yield fork(function* () { //监听到asyncIncrease，开启一个新的任务，用于处理后续任务，不影响原有任务线继续对asyncIncrease的监听
      yield delay(1500);
      yield put(increase());
    });
  }
}

function* asyncDecreaseHandle(action) {
  yield delay(1500);
  yield put(decrease());
}

export default function* counterTask() {
  // yield takeEvery(actionTypes.asyncIncrease, asyncIncreaseHandle);
  const hhh = yield fork(asyncIncreaseHandle); //使用fork模拟试下takeEvery指令
  console.log(hhh);
  yield takeEvery(actionTypes.asyncDecrease, asyncDecreaseHandle);
  console.log('正在监听asyncDecrease和asyncIncrease');
}
