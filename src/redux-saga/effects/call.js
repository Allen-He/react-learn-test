import { createEffect, effectTypes } from "../effectHelper"
import isPromise from 'is-promise'

/** 提供了call函数，用于产生类型为CALL的effect描述对象（外部使用）  */
export function call(fn, ...args) {
  let context = null; //暂存this指向
  let func = fn; //暂存函数fn
  if(Array.isArray(fn)) { //如果fn为一个数组，则this指向数组的第一项，func为数组的第二项
    context = fn[0];
    func = fn[1];
  }
  return createEffect(effectTypes.CALL, {
    context,
    fn: func,
    args
  })
}

/** 用于处理类型为CALL的effect描述对象（内部使用） */
export function runCallEffect(env, effect, next) {
  const { context, fn, args } = effect.payload;
  // 调用传递给call指令的函数，根据其返回结果进行后续处理
  const result = fn.call(context, ...args);
  if(isPromise(result)) { //如果result是promise，则等待其进入已决阶段
    result.then(res => next(res)).catch(err => next(null, err));  
  }else { //如果不是，则直接将result传入next，进行下一次迭代
    next(result);
  }
}
