import React from 'react'
import Student from './Student'

export default function StudentList(props) {
  const studentList = props.stuList.map((stu, i) => <Student key={i} {...stu} />);
  return (
    <ul>
      {studentList}
    </ul>
  )
}
