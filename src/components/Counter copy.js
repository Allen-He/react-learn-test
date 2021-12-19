// 不使用react-redux链接仓库
import React, { Component } from 'react'
import store from '../store'
import { asyncDecrease, asyncIncrease, decrease, increase } from '../store/action/counter'

/** 展示组件 */
function Counter(props) {
  return (
    <div>
      <h2>{props.number}</h2>
      <p>
        <button onClick={props.onAsyncDecrease}>异步减</button>
        <button onClick={props.onDecrease}>减</button>
        <button onClick={props.onIncrease}>加</button>
        <button onClick={props.onAsyncIncrease}>异步加</button>
      </p>
    </div>
  )
}

/**
 * 将整个仓库的状态映射到当前需要的props数据
 * @param {*} state 当前仓库的state
 */
function mapStateToProps(state) {
  return {
    number: state.counter
  }
}

/**
 * 映射事件处理函数到当前需要的props数据
 * @param {*} dispatch 当前仓库的dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    onAsyncDecrease() {
      dispatch(asyncDecrease());
    },
    onDecrease() {
      dispatch(decrease());
    },
    onIncrease() {
      dispatch(increase());
    },
    onAsyncIncrease() {
      dispatch(asyncIncrease());
    }
  }
}

/** 容器组件 */
class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = mapStateToProps(store.getState());
    store.subscribe(() => {
      this.setState(mapStateToProps(store.getState()));
    });
  }

  render() {
    const eventHandlers = mapDispatchToProps(store.dispatch);
    return (
      <Counter {...this.state} {...eventHandlers} />
    )
  }
}

export default CounterContainer;
