import React, { Component } from 'react'
import StudentInfo from './StudentInfo'

export default class StudentList extends Component {
  render() {
    const list = this.props.stuArr.map(item => <StudentInfo key={item.id} {...item} />)
    return (
      <ul>
        {list}
      </ul>
    )
  }
}
