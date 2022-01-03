import React from 'react'
import { Provider } from './react-redux'
import store from './store'
// import Counter from './components/Counter'
import StudentsPage from './components/StudentsPage'

export default function App() {
  return (
    // <Provider store={store}>
    //   <Counter />
    // </Provider>

    // <div>
    //   <Counter />
    // </div>
    
    <Provider store={store}>
      <StudentsPage/>
    </Provider>
  )
}
