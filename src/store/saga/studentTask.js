import { takeEvery, put, select, call } from 'redux-saga/effects'
import { actionTypes, setIsLoading, setStudentsAndTotal } from '../action/student/searchResult'
import api from '../../services'

function* fetchStusHandle() {
  yield put(setIsLoading(true)); //disptch一个action
  const condition = yield select(state => state.students.condition); //获取当前仓库中的数据
  const resp = yield call(api.searchStudents, condition); //调用副作用函数
  // const resp = yield apply(null, api.searchStudents, [condition]); //调用副作用函数
  yield put(setStudentsAndTotal(resp.datas, resp.cont));
  yield put(setIsLoading(false))
}

export default function* studentTask() {
  yield takeEvery(actionTypes.fetchStus, fetchStusHandle);
  console.log('正在监听：actionTypes.fetchStus');
}
