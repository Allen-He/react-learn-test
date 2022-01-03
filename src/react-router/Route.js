import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ctx from "./RouterContext";
import matchPath from "./matchPath";

export default class Route extends Component {

  static propTypes = {
    path: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    render: PropTypes.func,
    component: PropTypes.any,
    exact: PropTypes.bool,
    strict: PropTypes.bool,
    sensitive: PropTypes.bool,
  }

  /** 根据指定的location对象，返回match对象 */
  matchRoute(location) {
    // 注意：若果属性path没有传递，则默认为根路径 '/'
    const { path = '/', exact = false, strict = false, sensitive = false } = this.props;
    return matchPath(path, location.pathname, {
      exact,
      strict,
      sensitive
    });
  }

  /**
   * 渲染匹配到的子组件或其它子元素内容（优先级：children -> render -> component）
   * @param {object} ctxVal 最新的上下文对象---即match对象已更新
  */
  renderChildren(ctxVal) {
    const { children, render, component } = this.props;
    // 如果children有值：无论是否匹配，都会渲染（并且会忽略掉render和component属性）
    if(children !== undefined && children !== null) {
      if(typeof children === 'function') {
        return this.props.children(ctxVal);
      }else {
        return this.props.children;
      }
    }
    // children没有值，判断是否匹配成功。匹配没有成功：直接返回null
    if(!ctxVal.match) {
      return null;
    }
    // 匹配成功：有render，并且render的类型为函数
    if(typeof render === 'function') {
      return this.props.render(ctxVal);
    }
    // 匹配成功：render无效 或 只有component
    if(component !== undefined) {
      const Comp = this.props.component;
      return <Comp {...ctxVal} />
    }
    // 匹配成功：其他无效的情况
    return null;
  }

  /** 使用ctx.Consumer时，需要传递的函数 */
  conusmerFunc = (value) => {
    const ctxVal = {
      history: value.history,
      location: value.location,
      match: this.matchRoute(value.location)
    }

    return (
      <ctx.Provider value={ctxVal}>
        {this.renderChildren(ctxVal)}
      </ctx.Provider>
    )
  }

  render() {
    return (
      <ctx.Consumer>
        {this.conusmerFunc}
      </ctx.Consumer>
    )
  }
}
