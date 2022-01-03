export const actionTypes = {
  /** 对学生查询条件改变的action类型 */
  change: 'CHANGE'
}

/**
 * 根据新的查询条件创建一个action
 * @param {*} newCondition 
 * @returns 
 */
export function change(newCondition) {
  return {
    type: actionTypes.change,
    payload: newCondition
  }
}
