
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
  let result = yield asyncFunc();
  console.log(result);
  result = yield 666;
  console.log(result);
  console.log('saga任务启动了');
}