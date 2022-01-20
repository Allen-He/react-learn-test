import React from 'react'
import { Link } from 'react-router-dom'
import routeConfig from './routeConfig'

export default function BetterLink(props) {
  const { to, ...rest } = props;
  if(typeof to !== 'string' && to.name) {
    to.pathname = getPathname(to.name, '/', routeConfig);
    if(to.pathname === undefined) {
      throw new Error(`name属性值${to.name}无效`);
    }
  }

  return <Link {...rest} to={to} />
}


function getPathname(name, baseUrl, routeConfig) {
  for (const item of routeConfig) {
    const newPath = (baseUrl + item.path).replace(/\/\//, '/');

    if(item.name === name) {
      return newPath;
    }else {
      if(Array.isArray(item.children)) {
        const path = getPathname(name, newPath, item.children);
        if(path !== undefined) {
          return path;
        }
      }
    }
  }
}
