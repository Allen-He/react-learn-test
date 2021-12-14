import { effectTypes } from "./effectHelper";
import { runCallEffect } from "./effects/call";
import { runPutEffect } from "./effects/put";
import { runSelectEffect } from "./effects/select";

/**
 * 用于根据不同的effect描述对象的类型，进行不同的后续处理
 * @param {object} env saga任务执行期间共享的环境数据
 * @param {object} effect 当前需要处理的effect描述对象
 * @param {function} next 进行下一次迭代的方法
 */
export default function runEffect(env, effect, next) {
  switch (effect.type) {
    case effectTypes.CALL:
      runCallEffect(env, effect, next);
      break;
    case effectTypes.PUT:
      runPutEffect(env, effect, next);
      break;
    case effectTypes.SELECT:
      runSelectEffect(env, effect, next);
      break;
    default:
      throw new TypeError('the value of "type" is not valid.');
  }
}
