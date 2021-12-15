import { delay, put, select } from '../../redux-saga/effects'
import { increase } from '../action/counter';


export default function* rootSaga() {
  console.log('saga任务启动了');
  let res = yield select();
  console.log(res);
  // while(true) {
  //   yield delay(1000);
  //   res = yield put(increase());
  //   console.log(res);
  // }
  yield delay(1000);
  res = yield put(increase());
  console.log(res);
}
