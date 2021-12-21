import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
// import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './saga'

const sagaMid = createSagaMiddleware(); //创建saga中间件

// const store = createStore(reducer, applyMiddleware(sagaMid, logger));
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMid)));

console.log(store.getState());

sagaMid.run(rootSaga); //启动saga任务

export default store;
