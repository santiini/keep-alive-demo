import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { KeepAlive } from 'react-keep-alive';
import { Tabs } from 'antd';
// import A from './A'
// import B from './B'
// import C from './C'
import './App.css';

import List from './container/List';
import Detail from './container/Detail';

/**
 * KeepAlive 组件的使用
 *  1. KeepAlive 的 name 属性必须唯一，和 key 功能一致
 *  2. disabled 属性决定是否使用 keep-alive 缓存, 禁用仅在组件从未激活状态变为激活状态时生效。
 *  3. extra(v2.0.1+): 额外的数据可以通过 bindLifecycle 获取。
 *  4. <KeepAlive> 包裹的组件内部最外层必须有一个真实的 DOM 标签。
 */
const App: React.FC = (props) => {
  // const [toggle, setToggle] = useState(true);

  // const handlePlatformChange = (activeKey: string) => {
  //   props.history.push(`${props.match.url}/${activeKey}`);
  // }
  return (
    <div className="App" style={{padding: 80}}>
      {/* <ul>
        <li>
          <Link to="/a">a</Link>
        </li>
        <li onClick={() => setToggle(true)}>
          <Link to="/b">b</Link>
        </li>
        <li onClick={() => setToggle(false)}>
          <Link to="/c">c</Link>
        </li>
      </ul> */}

      <Tabs>
        <Tabs.TabPane tab={<Link to="/weibo">微博</Link>} key="weibo" />
        <Tabs.TabPane tab={<Link to="/wechat">微信</Link>} key="wechat" />
        <Tabs.TabPane tab={<Link to="/xiaohongshu">小红书</Link>} key="xiaohongshu" />
      </Tabs>

      <Switch>
        {/* <Route
          path="/a"
          render={() => (
            <KeepAlive name="Test" disabled={!toggle}>
              <A />
            </KeepAlive>
          )}
        />
        <Route
          path="/b"
          render={props => (
            <KeepAlive name="A" extra={props}><B /><B /></KeepAlive>
          )}
        />
        <Route
          path="/c"
          render={() => (
            <KeepAlive name="B">
              <C />
            </KeepAlive>
          )}
        /> */}
        <Route
          path={`/:platform/detail`}
          render={
            (props) => (
              <KeepAlive name="detail" disabled={false}>
                <Detail {...props} />
              </KeepAlive>
          )}
        />
        <Route
          path={`/:platform`}
          render={
            (props) => (
              <KeepAlive name="list" disabled={false}>
                <List {...props} />
              </KeepAlive>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
