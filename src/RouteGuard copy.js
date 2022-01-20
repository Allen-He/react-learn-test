import React, { Component } from 'react'
import { BrowserRouter as Router, withRouter } from "react-router-dom"

let prevLocation, // 上一个页面的location对象
    curLocation, // 当前页面的location对象
    action, // 跳转到当前页面的方式：POP | PUSH | REPLACE
    unBlock; // 暂存取消当前“阻塞”的方法

class _GuardHelper extends Component {
  componentDidMount() {
    // 开启一个阻塞
    unBlock = this.props.history.block((newLocation, act) => {
      prevLocation = this.props.location;
      curLocation = newLocation;
      action = act;
      return '';
    });

    // 添加一个“监听器”
    this.unListen = this.props.history.listen((newLocation, act) => {
      if(this.props.onChange) {
        const prevLocation = this.props.location;
        this.props.onChange(prevLocation, newLocation, act, this.unListen);
      }
    });
  }

  componentWillUnmount() {
    //组件被卸载时需要取消“阻塞”和“监听器”
    unBlock();
    this.unListen();
  }

  render() {
    return null;
  }
}


const GuardHelper = withRouter(_GuardHelper);


class RouteGuard extends Component {

  confirmHandle = (msg, next) => {
    if(this.props.onBeforeChange) {
      this.props.onBeforeChange(prevLocation, curLocation, action, next, unBlock);
    }else {
      next(true);
    }
  }

  render() {
    return <Router getUserConfirmation={this.confirmHandle}>
      <GuardHelper onChange={this.props.onChange} />
      {this.props.children}
    </Router>;
  }
}

export default RouteGuard;
