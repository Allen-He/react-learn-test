import { createStore } from '../redux'
import { createAddUserAction, createDeleteUserAction } from './action/usersAction';
import reducer from './reducer'

const store = createStore(reducer);

export default store;

console.log(store);

// 下方代码仅供测试使用
console.log(store.getState());

const unListen = store.subscribe(() => {
  console.log('监听器1：', store.getState());
})
const unListen2 = store.subscribe(() => {
  console.log('监听器2：', store.getState());
})


store.dispatch(createAddUserAction({
  id: 'sdfsdaf',
  name: 'xxfdafsdfasdfasdf',
  phone: 888
}));

unListen2();

store.dispatch(createDeleteUserAction('sdfsdaf'));
