import { createStore, bindActionCreators, applyMiddleware } from '../redux'
import { createAddUserAction, createDeleteUserAction } from './action/usersAction';
import reducer from './reducer'

/** 创建一个中间件 */
function logger1(store) {
  return function (next) {
    return function (action) {
      console.log('中间件1');
      console.log('state: ', store.getState());
      console.log('action: ', action);
      next(action);
      console.log('newState: ', store.getState());
      console.log('');
    }
  }
}

const logger2 = store => next => action => {
  console.log('中间件2');
  console.log('state: ', store.getState());
  console.log('action: ', action);
  next(action);
  console.log('newState: ', store.getState());
  console.log('');
}


const store = createStore(reducer, applyMiddleware(logger1, logger2));

// const store = applyMiddleware(logger1, logger2)(createStore)(reducer);

export default store;


// 下方代码仅供测试使用
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
