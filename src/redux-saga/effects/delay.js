import { call } from "./call";

export function delay(duration, val = true) {
  return call(function () { //使用call指令实现delay指令
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(val);
      }, duration);
    });
  });
}
