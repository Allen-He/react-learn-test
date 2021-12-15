import { createEffect, effectTypes } from "../effectHelper";

export function take(actionType) {
  return createEffect(effectTypes.TAKE, {
    actionType,
  });
}

export function runTakeFunc(env, effect, next) {
  const actionType = effect.payload.actionType;
  // 根据actionType订阅对应的监听器
  env.channel.take(actionType, (action) => {
    next(action); //当对应action发生时，要运行的处理函数
  });
}

