import React, { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import 'animate.css'
import './index.css'

/** SwitchTransition组件 + animate.css */

export default function Test3() {
  const [show1, setShow1] = useState(true);

  return (
    <div className="container">
      <SwitchTransition>
        <CSSTransition appear timeout={1000} key={show1}
          classNames={{
            appearActive: 'animate__zoomIn',
            enterActive: 'animate__zoomIn',
            exitActive: 'animate__zoomOut'
          }}
        >
          <h2 className="animate__animated">{show1 ? '内容1' : '内容2'}</h2>
        </CSSTransition>
      </SwitchTransition>
      <button onClick={() => {
        setShow1(!show1);
      }}>Toggle</button>
    </div>
  )
}
