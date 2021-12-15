import { delay, put, takeEvery } from '../../redux-saga/effects'
import { actionTypes, decrease, increase } from '../action/counter';

function* asyncIncrease() {
  yield delay(1000);
  yield put(increase());
}
function* asyncDecrease() {
  yield delay(1000);
  yield put(decrease());
}

export default function* rootSaga() {
  console.log('saga任务启动了');
  yield takeEvery(actionTypes.asyncIncrease, asyncIncrease);
  yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
}
