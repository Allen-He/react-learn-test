import { takeEvery, delay } from 'redux-saga/effects'
import { actionTypes } from '../action/counter'

function* asyncDecCallback(action) {
  console.log('asyncDecrease了一次: ', action);
  yield delay(500);

}

function* asyncIncCallback(action) {
  console.log('asyncIncrease了一次: ', action);
  yield delay(500);
}

export default function* counterTask() {
  // while(true) {
  //   const dec = yield take(actionTypes.decrease);
  //   console.log('decrese了一次: ', dec);
  //   const inc = yield take(actionTypes.increase);
  //   console.log('increase了一次: ', inc);
  // }
  yield takeEvery(actionTypes.asyncDecrease, asyncDecCallback);
  yield takeEvery(actionTypes.asyncIncrease, asyncIncCallback);
  console.log('正在监听asyncDecrease和asyncIncrease');
}
