import React from 'react'
// import { BrowserRouter, Route, withRouter } from "react-router-dom"
import { BrowserRouter, Route, withRouter } from "./react-router-dom"

function Comp(props) {
  return <div>
    {props.text}
    <button onClick={() => {
      props.history.push("/bbb")
    }}>跳转到 bbb</button>
  </div>
}

const CompWithRouter = withRouter(Comp);

function PageA() {
  return <div>
    <h1>Page aaa</h1>
    <CompWithRouter text="abc" />
  </div>
}

function PageB() {
  return <h1>Page bbb</h1>
}

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/aaa" component={PageA} />
      <Route path="/bbb" component={PageB} />
    </BrowserRouter>
  )
}
