import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import 'animate.css'
import './index.css'

/** CSSTransition组件 + animate.css */

function MyTransition({visible, children}) {
  return <CSSTransition in={visible} timeout={1000} appear mountOnEnter
    classNames={{
      appearActive: 'animate__fadeInRight',
      enterActive: 'animate__fadeInRight',
      exitActive: 'animate__fadeOutLeft',
      exitDone: 'exit-done'
    }}
  >
    {children}
  </CSSTransition>
}

function Comp1() {
  return <h2 className="animate__animated">组件One</h2>
}

function Comp2() {
  return <h2 className="animate__animated">组件Two</h2>
}

export default function Test2() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="container">
      <div className="compWrap">
        <MyTransition visible={visible}>
          <Comp1 />
        </MyTransition>
        <MyTransition visible={!visible}>
          <Comp2 />
        </MyTransition>
      </div>
      <button onClick={() => {
        setVisible(!visible);
      }}>Toggle</button>
    </div>
  )
}
