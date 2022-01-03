// 使用react-redux中的connect链接仓库
import React from 'react'
import { connect } from 'react-redux'
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

// 方案一：（更灵活、更常用）
// const hoc = connect(mapStateToProps, mapDispatchToProps); //返回一个高阶组件
// export default hoc(Counter); //传入展示组件，返回一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Counter);


// 方案二：
// const creators = {
//   onAsyncDecrease: asyncDecrease,
//   onDecrease: decrease,
//   onIncrease: increase,
//   onAsyncIncrease: asyncIncrease
// };
// export default connect(mapStateToProps, creators)(Counter);
