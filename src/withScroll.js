import React, { Component } from 'react'

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
