import React, { FC } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
} from 'react-router-dom'
import { Row, Col, Menu } from 'antd'

/* Router 之间的相互嵌套 */

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
]

const Sidebar: FC<RouteComponentProps> = props => {
  return (
    <Router basename={props.match.url}>
      <Row type="flex">
        <Col span={8}>
          <Menu>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/bubblegum">bubblegum</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/shoelaces">bubblegum</Link>
            </Menu.Item>
          </Menu>
          {routes.map(item => (
            <Route
              key={item.path}
              exact={item.exact}
              path={item.path}
              component={item.sidebar}
            />
          ))}
        </Col>
        <Col span={16}>
          {routes.map(item => (
            <Route
              key={item.path}
              exact={item.exact}
              path={item.path}
              component={item.main}
            />
          ))}
        </Col>
      </Row>
    </Router>
  )
}

export default Sidebar
