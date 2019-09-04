# React 实现 Keep-alive

React 中，要实现 keep-alive 效果，需要使用 react-keep-alive。

## react-keep-alive

react-keep-alive [github 地址](https://github.com/StructureBuilder/react-keep-alive)

### Api 说明和使用

React Keep Alive 提供了 <Provider>， 你必须把 <KeepAlive> 放在 Provider 里面。

### <Provider> 组件 和 <KeepAlive>

可以在全项目和局部使用 `react-keep-alive`

#### 全项目使用

```js
// 在 index.js 文件中，跟路由中引用 Provider
import { Provider } from 'react-keep-alive'

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <Provider>
        <App />
      </Provider>
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
)

// 在 App.js 中, 配合上 Router， Route 的 render 使用
// React Keep Alive 提供了 <Provider>， 你必须把 <KeepAlive> 放在 Provider 里面。
import { KeppAlive } from 'react-keep-alive'

function App() {
  const [toggle, setToggle] = useState(true)
  return (
    <div>
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

      <div>
        <button onClick={() => setToggle(!toggle)}>
          toggle({toggle.toString()})
        </button>
      </div>

      <Switch>
        <Route
          path="/a"
          render={() => (
            // name 必须存在并且需要确保当前 <Provider> 下的所有 <KeepAlive> 的 name 都是唯一的
            // 当我们不需要缓存组件时，我们可以禁用它；禁用仅在组件从未激活状态变为激活状态时生效。
            <KeepAlive name="Test" disabled={!toggle}>
              <A />
            </KeepAlive>
          )}
        />
        <Route
          path="/b"
          render={props => (
            // extra(v2.0.1+): 额外的数据可以通过 bindLifecycle 获取。
            <KeepAlive name="A" extra={props}>
              <B />
              <B />
            </KeepAlive>
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
  )
}
```

#### 局部使用

在需要的路由中使用，举例：List-Detail 场景中

```tsx
// 在需要的路由中，用 Provider 包含 Switch, Route
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
              extra={{ name: 'task-list' }}
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

// 在缓存组件内部
const TableList: FC<RouteComponentProps> = props => {
  const [value, setValue] = useState('')

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  // 缓存结果中不会触发
  useEffect(() => {
    console.log(111111111111)
  }, [])

  // 每次进入组件都会触发，包括首次渲染
  useKeepAliveEffect(() => {
    console.log('activated')

    return () => {
      console.log('unactivated')
    }
  })
  return (
    <div>
      <Input value={value} onChange={handleChange} />
      <Table
        rowKey="id"
        columns={columns}
        dataSource={list}
        pagination={{ pageSize: 20 }}
      />
    </div>
  )
}

export default List
```
