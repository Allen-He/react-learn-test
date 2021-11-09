import React from 'react'
import './index.css'
import Types from '../../../utils/commonTypes'
import PropTypes from 'prop-types'

ThreeLayout.defaultProps = {
  minWidth: 800, //最小宽度
  leftWidth: 200, //左侧区域的宽度
  rightWidth: 200, //右侧区域的宽度
  gap: 0, //主要内容区域两侧的间隙
}

ThreeLayout.porpTypes = {
  minWidth: PropTypes.number, //最小宽度
  leftWidth: PropTypes.number, //左侧区域的宽度
  rightWidth: PropTypes.number, //右侧区域的宽度
  gap: PropTypes.number, //主要内容区域两侧的间隙
  children: Types.children,
  left: Types.children,
  right: Types.children
}

export default function ThreeLayout(props) {
  
  return (
    <div
      className="three-layout"
      style={{ minWidth: props.minWidth }}
    >
      {/* 主要内容区 */}
      <div className="main">
        {props.children}
      </div>
      {/* 左侧区域 */}
      <div
        className="left"
        style={{ width: props.leftWidth, marginRight: props.gap }}
      >
        {props.left}
      </div>
      {/* 右侧区域 */}
      <div
        className="right"
        style={{ width: props.rightWidth, marginLeft: props.gap }}
      >
        {props.right}
      </div>
    </div>
  )
}
