import { change } from "./action/student/searchCondition"
import { fetchStudents } from "./action/student/searchResult"
import store from "./index"


store.dispatch(change({
  key: "dsafdsf",
  sex: 1,
  page: 100,
  limit: 10
}));

store.dispatch(fetchStudents());
