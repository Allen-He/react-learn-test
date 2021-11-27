import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.css'

FadeTransition.defaultProps = {
  timeout: 500,
}

export default function FadeTransition(props) {
  function addTransition(node) {
    node.style.transition = `opacity ${props.timeout}ms`;
  }
  function removeTransition(node) {
    node.style.transition = '';
  }

  return (
    <CSSTransition {...props} classNames="fade"
      onEnter={addTransition}
      onEntered={(node, isAppearing) => {
        removeTransition(node);
        props.onEntered && props.onEntered(node, isAppearing); //和SwitchTransition配合使用时，其会传递一个onEntered钩子函数，故此处需要特殊处理
      }}
      onExit={addTransition}
      onExited={(node, isAppearing) => {
        removeTransition(node);
        props.onExited && props.onExited(node, isAppearing); //和SwitchTransition配合使用时，其会传递一个onExited钩子函数，故此处需要特殊处理
      }}
    />
  )
}
