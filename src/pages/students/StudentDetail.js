import React from 'react'

export default function StudentDetail(props) {
  return (
    <div>
      <h2>学生详情页</h2>
      <p>当前学生的学号为：{props.match.params.sno}</p>
    </div>
  )
}
