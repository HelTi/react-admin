import React from 'react'

import { Route, Switch } from 'react-router-dom'

import routes from './routes'

const isAuth = false
const isLogin = true

class CustomRouterView extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.map(route => (
            <Route
              exact={route.exact}
              key={route.key}
              path={route.path}
              render={props => {
                return isLogin ? (
                  isAuth ? (
                    <route.component {...props} />
                  ) : (
                    <div>无权限</div>
                  )
                ) : (
                  <div>未登录</div>
                )
              }}
            />
          ))}
        </Switch>
      </div>
    )
  }
}

export default CustomRouterView
