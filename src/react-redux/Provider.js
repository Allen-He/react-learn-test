import React from 'react'
import ctx from './ctx'

/** 主要用于提供一个上下文 */
export default function Provider(props) {
  return (
    <ctx.Provider value={props.store}>
      {props.children}
    </ctx.Provider>
  )
}
