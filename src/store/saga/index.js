import { all } from "redux-saga/effects"
import counterTask from "./counterTask"
import studentTask from "./studentTask"


export default function* rootSaga() {
  yield all([counterTask(), studentTask()]);
  console.log("saga 完成");
}
