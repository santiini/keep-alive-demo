import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { KeepAlive } from 'react-keep-alive';
import A from './A'
import B from './B'
import C from './C'
import './App.css';

/**
 * KeepAlive 组件的使用
 *  1. KeepAlive 的 name 属性必须唯一，和 key 功能一致
 *  2. disabled 属性决定是否使用 keep-alive 缓存, 禁用仅在组件从未激活状态变为激活状态时生效。
 *  3. extra(v2.0.1+): 额外的数据可以通过 bindLifecycle 获取。
 *  4. <KeepAlive> 包裹的组件内部最外层必须有一个真实的 DOM 标签。
 */
const App: React.FC = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
            <ul>
        <li>
          <Link to="/a">a</Link>
        </li>
        <li onClick={() => setToggle(true)}>
          <Link to="/b">b</Link>
        </li>
        <li onClick={() => setToggle(false)}>
          <Link to="/c">c</Link>
        </li>
      </ul>

      <Switch>
        <Route
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
        />
      </Switch>
    </div>
  );
}

export default App;
