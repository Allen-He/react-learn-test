import { actionTypes, setIsLoading, setStudentsAndTotal } from "../action/student/searchResult"
import { takeEvery, put, call, select } from "redux-saga/effects"
import api from "../../services";

function* fetchStus() {
    yield put(setIsLoading(true)); //设置为正在加载中
    const condition = yield select(state => state.students.condition);
    try {
        const resp = yield call(api.searchStudents, condition); //使用call指令，按照当前仓库中的条件获取学生数据
        yield put(setStudentsAndTotal(resp.datas, resp.cont));
    } catch (err) {
        console.log(err.message);
    } finally {
        yield put(setIsLoading(false));
    }
}

export default function* studentTask() {
    yield takeEvery(actionTypes.fetchStus, fetchStus);
    console.log("正在监听 fetchStus")
}
