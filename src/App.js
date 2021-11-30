import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function CompA(props) {
  console.log(props.history);

  return <div>
    <h3>组件A</h3>
  </div>
}

export default function App() {
  return (
    <Router>
      <Route path="/news/:id" component={CompA} />
    </Router>
  )
}
