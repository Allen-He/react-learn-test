import api from "../../../services"

export const actionTypes = {
  /** 设置学生查询结果数组和总数 */
  setStudentsAndTotal: Symbol("setStudentsAndTotal"),
  /** 设置是否正在加载数据 */
  setIsLoading: Symbol("setIsLoading")
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
 * 异步获取数据成功后再触发actionTypes.setStudentsAndTotal
 * @returns action函数（需配合redux-thunk使用）
 */
export function fetchStudents() {
  return async function (dispatch) {
    const resp = await api.searchStudents();
    dispatch(setStudentsAndTotal(resp.datas, resp.cont));
  }
}
