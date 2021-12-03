import React, { Component } from 'react'
import Route from "./Route";
import matchPath from './matchPath'
import ctx from './RouterContext'

export default class Switch extends Component {
  /** 匹配Route子元素，将渲染第一个匹配到的Route，若最终未匹配成功则返回null */
  renderMatchChild = ({ location }) => {
    // 将多种情况下的children属性的值统一封装成数组，方便后续遍历
    let children = [];
    const propsChildren = this.props.children;
    if(Array.isArray(propsChildren)) {
      children = propsChildren;
    }else if(typeof propsChildren === 'object') {
      children = [propsChildren];
    }

    // 遍历children数组，渲染匹配到的第一个Route组件
    for (const child of children) {
      // 判断该child是否为Route组件，不是则抛出错误（Switch的直接子元素只能为Route组件）
      if(child.type !== Route) {
        throw new TypeError('the children of Switch Component must be type of  "class Route"')
      }
      const { path = '/', exact = false, strict = false, sensitive = false } = child.props;
      const match = matchPath(path, location.pathname, { exact, strict, sensitive });
      if(match) { // path匹配成功，则直接返回该child
        return child;
      }
    }
    return null; // 若path最终未匹配成功，则返回null
  }

  render() {
    return (
      <ctx.Consumer>
        {this.renderMatchChild}
      </ctx.Consumer>
    )
  }
}
