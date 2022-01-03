import { createEffect, effectTypes } from "../effectHelper";

export function put(action) {
  return createEffect(effectTypes.PUT, {
    action
  });
}

export function runPutEffect(env, effect, next) {
  const action = effect.payload.action;
  const res = env.store.dispatch(action);
  next(res);
}
