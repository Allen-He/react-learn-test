/**
 * 判断传入的参数是不是一个平面对象（plain object）
 * @param {object} obj
 * @returns {boolean}
 */
export default function isPlainObject(obj) {
  if(typeof obj !== 'object') {
    return false;
  }
  return Object.getPrototypeOf(obj) === Object.prototype;
}
