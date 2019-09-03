import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { RouteItem } from '../routes/router'

const renderRoutes = (
  routes: RouteItem[],
  authed = false,
  authPath = '/login',
  extraProps = {},
  switchProps = {}
) =>
  routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props =>
            // (
            //   <route.component {...props} {...extraProps} route={route} />
            // )
            {
              // 如果 route.requiresAuth = false 或者 authed = true 或者 route.path === authPath（参数默认值'/login'）则渲染我们页面，
              // 否则就渲染我们设置的authPath页面，并记录从哪个页面跳转。
              if (!route.requiresAuth || authed || route.path === authPath) {
                return (
                  <route.component {...props} {...extraProps} route={route} />
                )
              }

              return (
                <Redirect
                  to={{ pathname: authPath, state: { from: props.location } }}
                />
              )
            }
          }
        />
      ))}
    </Switch>
  ) : null

export default renderRoutes
