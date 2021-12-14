import { createEffect, effectTypes } from "../effectHelper";

export function select(func) {
  return createEffect(effectTypes.SELECT, {
    fn: func
  })
}

export function runSelectEffect(env, effect, next) {
  let state = env.store.getState();
  const filterFunc = effect.payload.fn;
  if(typeof filterFunc === 'function') {
    state = filterFunc(state);
  }
  next(state);
}
