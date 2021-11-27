import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './index.css'

export default class StudentsTable extends Component {
  static defaultProps = {
    stus: [],
  }
  static propTypes = {
    stus: PropTypes.array.isRequired,
    onClick: PropTypes.func, //“详情”按钮的点击事件
  }

  clickHandle = (sNo) => {
    this.props.onClick && this.props.onClick(sNo);
  }

  render() {
    const trs = this.props.stus.map(it => (
      <tr key={it.id}>
        <td>{it.sNo}</td>
        <td>{it.name}</td>
        <td>{it.sex === 0 ? '男' : '女'}</td>
        <td>{it.birth}</td>
        <td>{it.address}</td>
        <td>{it.phone}</td>
        <td>{it.email}</td>
        <td>
          <Link to={`/students/${it.sNo}`}>详情</Link>
        </td>
      </tr>
    ))
    return (
      <div className="students-table">
        <table>
          <thead>
            <tr>
              <th>学号</th>
              <th>姓名</th>
              <th>性别</th>
              <th>出生年</th>
              <th>所在地</th>
              <th>联系电话</th>
              <th>邮箱</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {trs}
          </tbody>
        </table>
      </div>
    )
  }
}
