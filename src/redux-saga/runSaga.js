import isGenerator from 'is-generator'
import isPromise from 'is-promise'
import { isEffect } from './effectHelper'
import runEffect from './runEffect'
import Task from './Task'

/**
 * 用于开启一个saga任务
 * @param {*} env saga任务执行期间共享的环境数据
 * @param {*} generatorFunc 生成器函数
 * @param  {...any} args 上述生成器函数的参数
 * @returns {object} Task类型的对象
 */
export default function runSaga(env, generatorFunc, ...args) {
  const generator = generatorFunc(...args);
  if(isGenerator(generator)) { //如果是生成器，则调用next方法进行迭代
    next();
  }else { // 如果不是，则当做普通函数调用
    console.log('generatorFunc是一个普通函数');
  }

  /**
   * 对generator进行迭代，直到结束为止
   * @param {*} nextValue 正常调用iterator.next时，传递的值
   * @param {*} err 调用iterator.throw时，传递的值
   * @param {*} isOver 调用iterator.return时，传递的值
   */
  function next(nextValue, err, isOver) {
    let result; // 记录迭代结果
    if(err) {
      result = generator.throw(err); //在generatorFunc的函数体中抛出错误
    }else if(isOver) {
      result = generator.return(); //直接结束整个迭代流程
    }else {
      result = generator.next(nextValue); //正常迭代
    }

    const { value, done } = result;
    if(done) { //如果迭代结束，则直接返回
      return;
    }

    // 迭代未结束，判断value的值的类型
    if(isEffect(value)) { //如果是effect描述对象，根据具体类型进行处理
      runEffect(env, value, next);
    }else if(isPromise(value)) { //如果是promise，则等待promise进入已决阶段
      value.then(res => next(res)).catch(err => next(null, err));
    }else { //其他情况，直接进行下一次迭代
      next(value);
    }
  }

  return new Task();
}
