import React from 'react'
import { Route } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import "animate.css"

export default function TransitionRoute(props) {
  const { component: Component, ...rest } = props;
  return (
    <Route {...rest} >
      {({ match }) => { //若匹配到当前路由，则match为一个对象；反之为null
        return <CSSTransition
          in={match ? true : false}
          timeout={500}
          classNames={{
            enter: "animated fast fadeInRight",
            exit: "animated fast fadeOutLeft"
          }}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <Component />
        </CSSTransition>
      }}
    </Route>
  )
}
