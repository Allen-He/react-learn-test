import { call, delay } from '../../redux-saga/effects'

function asyncFunc() {
  return new Promise((resolve, reject) => {
    const res = Math.random();
    if(res < 0.5) {
      resolve(res);
    }else {
      reject('出错啦');
    }
  })
}

export default function* rootSaga() {
  console.log('saga任务启动了');
  let result = yield call(asyncFunc);
  console.log(result);
  result = yield call((a) => {
    console.log('a: ', a);
    return 'sdfs'
  }, 1);
  console.log(result);
  const delayRes = yield delay(2000, 'delay');
  console.log('delayRes', delayRes);
}