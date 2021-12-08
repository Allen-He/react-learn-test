import { createStore, bindActionCreators } from '../redux'
import { createAddUserAction, createDeleteUserAction } from './action/usersAction';
import reducer from './reducer'

const store = createStore(reducer);

export default store;


// 下方代码仅供测试使用
console.log(store);
console.log(store.getState());

const unListen = store.subscribe(() => {
  console.log('监听器：', store.getState());
})

const actionsObj = {
  addUser: createAddUserAction,
  deleteUser: createDeleteUserAction,
}

const actions = bindActionCreators(actionsObj, store.dispatch);

actions.addUser({
  id: 'sdfsdaf',
  name: 'xxfdafsdfasdfasdf',
  phone: 888
});

actions.deleteUser('sdfsdaf');


const xxx = bindActionCreators(createAddUserAction, store.dispatch);
xxx({
  id: 'xxx',
  name: 'xxfdafsdfasdfasdf',
  phone: 888
});
