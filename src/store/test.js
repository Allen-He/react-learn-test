// import { change } from "./action/student/searchCondition"
import { asyncDecrease, asyncIncrease, autoIncrease, decrease, increase, stopAutoIncrease } from "./action/counter"
import { fetchStus } from "./action/student/searchResult";
import store from "./index"

// store.dispatch(change({
//   key: "dsafdsf",
//   sex: 1,
//   page: 100,
//   limit: 10
// }));

window.increase = function () {
  store.dispatch(increase());
}
window.decrease = function () {
  store.dispatch(decrease());
}
window.asyncIncrease = function () {
  store.dispatch(asyncIncrease());
}
window.asyncDecrese = function () {
  store.dispatch(asyncDecrease());
}
window.fetchStus = function () {
  store.dispatch(fetchStus());
}
window.autoIncrease = function () {
  store.dispatch(autoIncrease());
}
window.stopAutoIncrease = function () {
  store.dispatch(stopAutoIncrease());
}
