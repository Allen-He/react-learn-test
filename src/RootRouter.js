import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routeConfig from './routeConfig'

function getRoutes(routes, baseUrl) {
  if(!Array.isArray(routes)) {
    return null;
  }
  const rs = routes.map((rt, i) => {
    const { path, name, component: Comp, children, ...rest } = rt;
    const newPath = `${baseUrl}${path}`.replace(/\/\//g, '/');
    return (
      <Route key={i} {...rest}
        path={newPath}
        render={(values) => {
          return <Comp {...values}>
            {getRoutes(rt.children, newPath)}
          </Comp>
        }}
      />
    )
  }) 
  return (
    <Switch>
      {rs}
    </Switch>
  );
}

export default function RootRouter() {
  return (
    <>
      {getRoutes(routeConfig, '/')}
    </>
  )
}
