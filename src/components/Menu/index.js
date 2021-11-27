import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default class Menu extends Component {
  render() {
    return (
      <ul className="menu-list">
        <li className="menu-item"><Link to="/students">学生列表</Link></li>
        <li className="menu-item"><Link to="/students/add">添加学生</Link></li>
        <li className="menu-item"><Link to="/courses">课程列表</Link></li>
        <li className="menu-item"><Link to="/courses/add">添加课程</Link></li>
      </ul>
    )
  }
}
