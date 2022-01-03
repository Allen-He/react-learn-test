export const actionTypes = {
  increase: 'INCREASE',
  decrease: 'DECREASE',
  asyncIncrease: 'ASYNC_INCREASE',
  asyncDecrease: 'ASYNC_DECREASE',
  autoIncrease: 'AUTO_INCREASE',
  stopAutoIncrease: 'STOP_AUTO_INCREASE'
}

export function increase() {
  return {
    type: actionTypes.increase
  }
}

export function decrease() {
  return {
    type: actionTypes.decrease
  }
}

export function asyncIncrease() {
  return {
    type: actionTypes.asyncIncrease
  }
}

export function asyncDecrease() {
  return {
    type: actionTypes.asyncDecrease
  }
}

export function autoIncrease() {
  return {
    type: actionTypes.autoIncrease
  }
}

export function stopAutoIncrease() {
  return {
    type: actionTypes.stopAutoIncrease
  }
}
