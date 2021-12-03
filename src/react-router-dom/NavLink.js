import React from 'react'
import Link from './Link'
import ctx from '../react-router/RouterContext'
import matchPath from '../react-router/matchPath';
import { parsePath } from 'history';

export default function NavLink(props) {
  const {
    activeClass = 'active',
    exact = false,
    strict = false,
    sensitive = false,
    ...rest
  } = props; //将props属性中的特殊属性解构出来用于判断当前location是否和to属性匹配，并将剩余的属性的都传给Link组件

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
          const match = matchPath(newLoc.pathname, value.location.pathname, { exact, strict, sensitive });
          if(match) { //如果匹配成功，则返回应用了activeClass的Link组件
            return <Link {...rest} className={activeClass} />
          }
          //如果匹配失败，则直接返回Link组件
          return <Link {...rest} />
        }
      }
    </ctx.Consumer>
  )
}
