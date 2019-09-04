import React, { FC } from 'react'
import { Provider, KeepAlive } from 'react-keep-alive'
import { Switch, RouteComponentProps, Route, Redirect } from 'react-router'
import TableList from './TableList'
import Detail from './Detail'

const List: FC<RouteComponentProps> = props => {
  return (
    <Provider>
      <Switch>
        <Route
          path={`${props.match.path}/list`}
          render={props => (
            <KeepAlive
              name="task-list"
              disabled={false}
              // extra 内容的获取
              extra={{ extraP: 'task-list' }}
            >
              <TableList {...props} />
            </KeepAlive>
          )}
        />
        <Route path={`${props.match.path}/detail`} component={Detail} />
        <Redirect from="*" to={`${props.match.url}/list`} />
      </Switch>
    </Provider>
  )
}

export default List
