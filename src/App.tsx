import React, { FC } from 'react'
import { Tabs } from 'antd'
import { Switch, withRouter, RouteComponentProps } from 'react-router-dom'
import renderRoutes from './lib/renderRoutes'
import routes from './routes/router'

// 如果登陆之后可以利用redux修改该值(关于redux不在我们这篇文章的讨论范围之内）
// const authed = false
// 默认未登录的时候返回的页面，可以自行设置
const authPath = '/login'

const App: FC<RouteComponentProps> = props => {
  const authed = !!window.localStorage.getItem('authed')

  const toPath = (activeKey: string) => {
    props.history.push(`/${activeKey}`)
  }

  return (
    <div style={{ padding: 80 }}>
      <Tabs onChange={toPath} defaultActiveKey="">
        <Tabs.TabPane tab="Task" key="task" />
        <Tabs.TabPane tab="User" key="user" />
        <Tabs.TabPane tab="List" key="list" />
      </Tabs>

      <Switch>
        {/* <Route path="/task" component={Task} />
        <Route path="/user" component={User} />
        <Route path="/list" component={List} /> */}
        {renderRoutes(routes, authed, authPath)}
      </Switch>
    </div>
  )
}

export default withRouter(App)
