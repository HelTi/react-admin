import React from 'react'

import { Route, Switch } from 'react-router-dom'

import routes from './routes'

const renderRoute = r => {
  console.log('r', r)
  return <Route exact key={r.key} path={r.key} render={(props) => <r.component {...props}/>} />
}
class CustomRouterView extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.map(route =>
            route.component
              ? renderRoute(route)
              : route.subs.map(r => renderRoute(r))
          )}
        </Switch>
      </div>
    )
  }
}

export default CustomRouterView
