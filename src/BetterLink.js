import React from 'react'
import { Link } from 'react-router-dom'
import routeConfig from './routeConfig'

function getPathFromName(name, baseUrl, routesArr) {
  for (const item of routesArr) {
    const newPath = (baseUrl + item.path).replace(/\/\//g, '/');
    if(item.name === name) {
      return newPath;
    }else {
      if(Array.isArray(item.children)) {
        const path = getPathFromName(name, newPath, item.children);
        if(path !== undefined) {
          return path;
        }
      }
    }
  }
}

export default function BetterLink({ to, ...rest }) {
  if(typeof to !== 'string' && to.name) {
    to.pathname = getPathFromName(to.name, '/', routeConfig);
  }

  return <Link to={to} {...rest} />
}
