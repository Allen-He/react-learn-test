import { createEffect, effectTypes } from "../effectHelper";
import { excuteGenerator } from "../runSaga";

export function all(generators = []) {
  return createEffect(effectTypes.ALL, {
    generators
  });
}

export function runAllEffect(env, effect, next) {
  const generators = effect.payload.generators;
  const tasks = generators.map(gen => excuteGenerator(env, gen));
  // 将tasks数组中的各个task任务对象转化为promise，当所用任务（promise）完成后再继续迭代
  const proms = tasks.map(task => task.toPromise());
  Promise.all(proms).then(res => next(res));
}
