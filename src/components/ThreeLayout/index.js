import React from 'react'
import './index.css'

export default function ThreeLayout(props) {
  const defaultProps = {
    minWidth: 800, //最小宽度
    leftWidth: 200, //左侧区域的宽度
    rightWidth: 200, //右侧区域的宽度
    gap: 0, //主要内容区域两侧的间隙
  }
  const resProps = Object.assign({}, defaultProps, props);
  
  return (
    <div
      className="three-layout"
      style={{ minWidth: resProps.minWidth }}
    >
      {/* 主要内容区 */}
      <div className="main">
        {resProps.children}
      </div>
      {/* 左侧区域 */}
      <div
        className="left"
        style={{ width: resProps.leftWidth, marginRight: resProps.gap }}
      >
        {resProps.left}
      </div>
      {/* 右侧区域 */}
      <div
        className="right"
        style={{ width: resProps.rightWidth, marginLeft: resProps.gap }}
      >
        {resProps.right}
      </div>
    </div>
  )
}
