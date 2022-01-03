import React from 'react'
import ctx from '../react-router/RouterContext'
import { parsePath } from 'history'

// parsePath方法的作用：将一个路径字符串转化为一个location对象并返回

export default function Link(props) {
  const { to, ...rest } = props; //将props属性中的特殊属性解构出来，并将剩余的属性的都传给a标签（如此便可以在使用时，自定义className等属性应用到a标签）

  return (
    <ctx.Consumer>
      {
        (value) => {
          let newLoc; //根据to属性生成一个新的location对象
          if(typeof props.to === 'object') {
            newLoc = props.to;
          }else {
            newLoc = parsePath(props.to);
          }
          const href = value.history.createHref(newLoc); //根据新生成的location对象生成一个href字符串

          return (
            <a {...rest} href={href} onClick={(e) => {
              e.preventDefault(); //阻止a标签被点击时的默认行为（刷新跳转）
              value.history.push(newLoc); //利用上下文数据中的history.push做页面的“无刷新跳转”
            }}>{props.children}</a>
          )
        }
      }
    </ctx.Consumer>
  )
}
