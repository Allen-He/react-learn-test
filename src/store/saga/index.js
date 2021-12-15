import { all, delay, put, take } from '../../redux-saga/effects'
import { actionTypes, decrease, increase } from '../action/counter';

function* asyncIncrease() {
  yield take(actionTypes.asyncIncrease);
  yield delay(1000);
  yield put(increase());
}
function* asyncDecrease() {
  yield take(actionTypes.asyncDecrease);
  yield delay(1000);
  yield put(decrease());
}

export default function* rootSaga() {
  console.log('saga任务启动了');
  const res = yield all([asyncIncrease(), asyncDecrease()]);
  console.log('saga结束了', res);
}
