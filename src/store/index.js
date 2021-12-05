import { createStore } from 'redux'
import { createAddUserAction, createDeleteUserAction } from './action/usersAction';
import reducer from './reducer'

const store = createStore(reducer);

export default store;


// 下方代码仅供测试使用
console.log(store.getState());

store.dispatch(createAddUserAction({
  id: 'sdfsdaf',
  name: 'xxfdafsdfasdfasdf',
  phone: 888
}));
console.log(store.getState());

store.dispatch(createDeleteUserAction('sdfsdaf'));
console.log(store.getState());
