import React from 'react'

export default function Student(props) {
  return (
    <li>
      【姓名】{props.name}
      【性别】{props.sex === 0 ? 'male' : 'female'}
      【出生年】{props.birth}
      【联系电话】{props.phone}
    </li>
  )
}
