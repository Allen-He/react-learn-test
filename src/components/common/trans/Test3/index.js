import React, { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './index.css'

/** SwitchTransition组件 */

export default function Test3() {
  const [show1, setShow1] = useState(true);

  return (
    <div className="container">
      <SwitchTransition mode="out-in">
        <CSSTransition appear timeout={800} key={show1}>
          <h2>{show1 ? '内容1' : '内容2'}</h2>
        </CSSTransition>
      </SwitchTransition>
      <button onClick={() => {
        setShow1(!show1);
      }}>Toggle</button>
    </div>
  )
}
