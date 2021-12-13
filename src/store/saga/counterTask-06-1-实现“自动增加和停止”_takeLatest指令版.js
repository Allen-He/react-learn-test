import { takeLatest, delay, put } from 'redux-saga/effects'
import { actionTypes, increase } from '../action/counter'

let isStop = false; //控制是否停止“自动增加”

function* autoIncreaseHandle() {
  isStop = false;
  while(true) {
    yield delay(1000);
    if(isStop) {
      break;
    }
    yield put(increase());
  }
}

function stopAutoIncreaseHandle() {
  isStop = true;
}

export default function* counterTask() {
  yield takeLatest(actionTypes.autoIncrease, autoIncreaseHandle);
  yield takeLatest(actionTypes.stopAutoIncrease, stopAutoIncreaseHandle);
  console.log('正在监听autoIncrease、stopAutoIncrease');
}
