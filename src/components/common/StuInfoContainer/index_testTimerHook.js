import React, { useState } from 'react'
import useTimer from '../../myHooks/useTimer'

function TimerComp() {
  // 使用自定义HOOK
  useTimer(() => {
    console.log('hhh');
  }, 1000);

  return (
    <>
      <h1>使用自定义HOOK</h1>
      <p>PS: 组件UI渲染完毕之后，开启一个定时器（干一些事情），当该组件销毁时清除定时器</p>
    </>
  )
}

export default function StuInfoContainer() {
  const [visiable, setVisiable] = useState(true);

  return (
    <div>
      { visiable && <TimerComp/> }
      <button onClick={() => {
        setVisiable(!visiable);
      }}>显示/隐藏</button>
    </div>
  )
}
