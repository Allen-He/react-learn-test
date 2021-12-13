import { delay, put, takeLatest } from 'redux-saga/effects'
import { actionTypes, increase } from '../action/counter'

/** 使用takeLatest指令实现对asyncIncrease监听的防抖 */
function* asyncIncreaseHandle(action) {
  yield delay(1500);
  yield put(increase());
}

export default function* counterTask() {
  yield takeLatest(actionTypes.asyncIncrease, asyncIncreaseHandle);
  console.log('正在监听asyncIncrease');
}
