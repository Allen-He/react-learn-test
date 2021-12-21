export const actionTypes = {
  /** 设置学生查询结果数组和总数 */
  setStudentsAndTotal: 'SET_STUDENTS_AND_TOTAL',
  /** 设置是否正在加载数据 */
  setIsLoading: 'SET_IS_LOADING',
  /** 用于获取学生数据的action（被saga监听） */
  fetchStus: 'FETCH_STUS',
}

/**
 * 得到一个设置学生数组和总数的action
 * @param {*} arr 
 * @param {*} total 
 */
export function setStudentsAndTotal(arr, total) {
  return {
    type: actionTypes.setStudentsAndTotal,
    payload: {
      datas: arr,
      total,
    }
  }
}

/**
 * 得到一个设置数据是否正在加载的action
 * @param {*} isLoading 
 * @returns 
 */
export function setIsLoading(isLoading) {
  return {
    type: actionTypes.setIsLoading,
    payload: isLoading
  }
}

/**
 * 得到一个获取学生数据的action（被saga监听）
 * @param {*} isLoading 
 * @returns 
 */
export function fetchStus() {
  return {
    type: actionTypes.fetchStus,
  }
}
