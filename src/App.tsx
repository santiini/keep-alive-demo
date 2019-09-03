import React, {FC} from 'react'
import { Tabs } from 'antd';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import Task from './container/Task';
import User from './container/User';
import List from './container/List';

const App: FC<RouteComponentProps> = props => {
  const toPath = (activeKey: string) => {
    props.history.push(`/${activeKey}`);
  }

  return (
    <div style={{padding: 80}}>
      <Tabs onChange={toPath}>
        <Tabs.TabPane tab="Task" key="task" />
        <Tabs.TabPane tab="User" key="user" />
        <Tabs.TabPane tab="List" key="list" />
      </Tabs>

      <Switch>
        <Route path="/task" component={Task} />
        <Route path="/user" component={User} />
        <Route path="/list" component={List} />
      </Switch>
    </div>
  )
}

export default withRouter(App)