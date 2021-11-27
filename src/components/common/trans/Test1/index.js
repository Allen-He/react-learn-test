import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.css'

/** CSSTransition组件 */

function MyTransition({visible, children}) {
  return <CSSTransition in={visible} timeout={800} appear mountOnEnter>
    {children}
  </CSSTransition>
}

function Comp1() {
  return <h2>组件One</h2>
}

function Comp2() {
  return <h2>组件Two</h2>
}

export default function Test1() {
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
