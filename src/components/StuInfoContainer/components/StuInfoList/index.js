import React from 'react'
import PropTypes from 'prop-types'

export default function StuInfoList(props) {
  const stus = props.stuInfoArr.map(it => (
    <li key={it.id}>姓名：{it.name}，出生年：{it.birth}，电话：{it.phone}</li>
  ))
  return (
    <ul>
      {stus}
    </ul>
  )
}

StuInfoList.defaultProps = {
  stuInfoArr: [],
}

StuInfoList.propTypes = {
  stuInfoArr: PropTypes.array.isRequired,
}