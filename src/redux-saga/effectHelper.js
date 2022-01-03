const specialEffectProp = '@@redux-saga/IO'; //effect描述对象的特殊属性

/** 描述对象的类型 */
export const effectTypes = {
  CALL: 'CALL',
  APPLY: 'APPLY',
  PUT: 'PUT',
  SELECT: 'SELECT',
  TAKE: 'TAKE',
  FORK: 'FORK',
  CANCEL: 'CANCEL',
  ALL: 'ALL'
}

/**
 * 创建一个effect描述对象
 * @param {string} type
 * @param {object} payload 
 */
export function createEffect(type, payload) {
  // 判断type值是否有效
  if(!Object.values(effectTypes).includes(type)) {
    throw new TypeError('the value of "type" is not valid!');
  }
  return {
    [specialEffectProp]: true,
    type,
    payload
  }
}

/**
 * 判断传入的参数是否为一个effect描述对象
 * @param {*} obj 
 */
export function isEffect(obj) {
  if(typeof obj !== 'object') {
    return false;
  }
  return obj[specialEffectProp] === true;
}
