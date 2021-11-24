import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header-box">
        <div className="left">
          学生管理系统
        </div>
        <div className="right">
          <div className="right-item">用户名</div>
          <div className="right-item">注销</div>
        </div>
      </div>
    )
  }
}
