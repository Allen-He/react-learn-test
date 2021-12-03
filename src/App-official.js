import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import { BrowserRouter, Route } from './react-router-dom'

function CompA(props) {
  return <div>
    <h2>组件AAA</h2>
  </div>
}
function CompB(props) {
  return <div>
    <h2>组件BBB</h2>
  </div>
}
function Change(props) {
  return <div>
    <button onClick={() => props.history.push('/aaa')}>去页面 AAA</button>
    |
    <button onClick={() => props.history.push('/bbb')}>去页面 BBB</button>
  </div>
}

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/aaa" component={CompA} />
      <Route path="/bbb" component={CompB} />
      {/* <Route path="/" component={Change} /> */}
      <Route component={Change} />
    </BrowserRouter>
  )
}
