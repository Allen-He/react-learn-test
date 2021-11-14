import React from 'react'
import { Consumer } from './formContext'

export default function FormButton(props) {
  return (
    <div>
      <Consumer>
        {(context) => (
          <button onClick={() => { context.submit() }}>
            {props.children}
          </button>
        )}
      </Consumer>
    </div>
  )
}
