import React, { Component } from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

let prevLocation, curLocation, action, unBlock;

class _GuardHelper extends Component {
  componentDidMount() {
    // 添加阻塞
    unBlock = this.props.history.block((newLocation, act) => {
      prevLocation = this.props.location;
      curLocation = newLocation;
      action = act;
      return '';
    });
    // 添加监听器
    this.unListen = this.props.history.listen((newLocation, act) => {
      if(this.props.onChange) {
        const prevLocation = this.props.location;
        this.props.onChange(prevLocation, newLocation, act, this.unListen);
      }
    });
  }

  componentWillUnmount() {
    // 取消阻塞和监听器
    unBlock();
    this.unListen();
  }

  render() {
    return null;
  }
}

const GuardHelper = withRouter(_GuardHelper);

export default class RouteGuard extends Component {
  confirmHandle = (msg, next) => {
    if(this.props.onBeforeChange) {
      this.props.onBeforeChange(prevLocation, curLocation, action, next, unBlock);
    }else {
      next(true);
    }
  }

  render() {
    return (
      <Router getUserConfirmation={this.confirmHandle}>
        <GuardHelper onChange={this.props.onChange} />
        {this.props.children}
      </Router>
    )
  }
}