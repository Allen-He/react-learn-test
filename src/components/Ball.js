import React, { Component } from 'react'
import './Ball.css'

export default class Ball extends Component {
  /**
   * @param {*} props left | top | xSpeed | ySpeed | bg
   */
  constructor(props) {
    super(props);
    // 状态初始化：left | top | xSpeed | ySpeed
    this.state = {
      left: props.left || 0,
      top: props.top || 0,
      xSpeed: props.xSpeed || 100, //水平方向：每秒移动的像素值
      ySpeed: props.ySpeed || 100, //垂直方向：每秒移动的像素值
    }

    const intervalTime = 1000 / 60; //间隔时间：毫秒

    this.timer = setInterval(() => {
      const disX = this.state.xSpeed * intervalTime / 1000;
      const disY = this.state.ySpeed * intervalTime / 1000;
      let newLeft = this.state.left + disX;
      let newTop = this.state.top + disY;

      // 水平方向 边界判断
      if(newLeft < 0) {
        newLeft = 0;
        this.setState({ xSpeed: -this.state.xSpeed });
      }else if(newLeft > document.documentElement.clientWidth - 100) {
        newLeft = document.documentElement.clientWidth - 100;
        this.setState({ xSpeed: -this.state.xSpeed });
      }
      // 垂直方向 边界判断
      if(newTop < 0) {
        newTop = 0;
        this.setState({ ySpeed: -this.state.ySpeed });
      }else if(newTop > document.documentElement.clientHeight - 100) {
        newTop = document.documentElement.clientHeight - 100;
        this.setState({ ySpeed: -this.state.ySpeed });
      }
      // 更新小球的位置
      this.setState({ left: newLeft, top: newTop });
    }, intervalTime);
  }

  render() {
    return (
      <div className="ball" style={{
        left: this.state.left,
        top: this.state.top,
        backgroundColor: this.props.bg,
      }}></div>
    )
  }
}
