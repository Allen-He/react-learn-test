import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ctx from './RouterContext'
import matchPath from './matchPath'

export default class Router extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    children: PropTypes.node
  }

  state = {
    location: this.props.history.location
  }

  componentDidMount() {
    this.unListen = this.props.history.listen((location, action) => {
      this.setState({ location }); //监听地址变化，若发生变化，更新当前state中的location以触发该组件的重新渲染
    });
  }
  componentWillUnmount() {
    this.unListen(); //该组件卸载时，取消监听
  }

  render() {
    const ctxVal = {
      history: this.props.history,
      location: this.state.location,
      match: matchPath('/', this.state.location.pathname),
    }
    return (
      <ctx.Provider value={ctxVal}>
        {this.props.children}
      </ctx.Provider>
    )
  }
}
