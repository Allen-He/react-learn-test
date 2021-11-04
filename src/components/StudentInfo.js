import React from 'react';

export default function StudentInfo(props) {
  return (
    <li>
      【姓名】{props.name}
      【性别】{props.sex === 0 ? 'male' : 'female'}
      【籍贯】{props.address}
      【练习电话】{props.phone}
    </li>
  );
}
