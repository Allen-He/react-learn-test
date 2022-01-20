import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routeConfig from './routeConfig' 

function getRoutes(routeConfig, baseUrl) {
  if(!routeConfig) {
    return null;
  }
  const rs = routeConfig.map((rt, i) => {
    const { children, component: Comp, path, name, ...rest } = rt;
    const newPath = (baseUrl + path).replace(/\/\//g, '/');

    return (
      <Route key={i} {...rest} path={newPath}
        render={(ctx) => {
          return <Comp {...ctx} children={
            getRoutes(children, newPath)
          } />
        }}
      />
    )
  });

  return <Switch>
    {rs}
  </Switch>;
}

export default function RootRouter(props) {
  return (
    <>
      {getRoutes(routeConfig, '/')}
    </>
  )
};
