import React, { Component } from 'react'

/** 滚动条复位（高阶组件） */
export default function withScroll(Comp) {
  return class ScrollWrapper extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
      return <Comp {...this.props} />
    }
  }
}
