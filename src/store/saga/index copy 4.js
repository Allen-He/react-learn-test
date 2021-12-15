import { delay, put, take } from '../../redux-saga/effects'
import { actionTypes, increase } from '../action/counter';


export default function* rootSaga() {
  console.log('saga任务启动了');
  while(true) {
    console.log('开始监听asyncIncrease');
    const res = yield take(actionTypes.asyncIncrease);
    console.log('监听到asyncIncrease被触发了', res);
    yield delay(1000);
    yield put(increase());
  }
}
