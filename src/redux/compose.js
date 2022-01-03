/**
 * 用于函数组合，指的是将一个数组中的函数进行组合，并形成一个新的函数，该函数在调用时，实际上是反向调用数组中的函数。
 * @param  {...function} funcs 
 */
export default function compose(...funcs) {
  // 如果没有传递func，那么返回的函数的功能为：你传递什么，我就返回什么
  if(funcs.length === 0) {
    return arg => arg;
  }
  // 如果只传递了一个func，那么返回的函数就是：传递过来的函数
  if(funcs.length === 1) {
    return funcs[0];
  }
  // 如果传递了两个及以上的func，那么返回的函数实质上是：在内部反向调用传递过来的函数，原始参数传递给倒数第一个函数，倒数第一个函数的返回值将作为倒数第二个函数的参数，以此类推。
  // return function (...args) {
  //   let lastReturn = null; //记录上一个函数的返回值（倒序）
  //   for (let i = funcs.length - 1; i >= 0; i--) {
  //     const curFunc = funcs[i];
  //     if(i === funcs.length - 1) {
  //       lastReturn = curFunc(...args);
  //     }else {
  //       lastReturn = curFunc(lastReturn);
  //     }
  //   }
  //   return lastReturn;
  // }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
