import React, { Component } from 'react'
import './index.css'

export default class Menu extends Component {
  render() {
    return (
      <ul className="menu-list">
        <li className="menu-item"><a href="/students">学生列表</a></li>
        <li className="menu-item"><a href="/students/add">添加学生</a></li>
        <li className="menu-item"><a href="/courses">课程列表</a></li>
        <li className="menu-item"><a href="/courses/add">添加课程</a></li>
      </ul>
    )
  }
}
