## 使用中的总结

#### create-react-app 中 eslint 的版本

@typescript-eslint/eslint-plugin@1.13.0, @typescript-eslint/parser@1.13.0 对于 eslint 的版本要求

#### react-keep-alive 中 react-router 的版本

React Router 必须确保是 最新版本。因为 React Keep Alive 使用了 new Context，所以必须确保 <Router> 使用相同的 API。请使用以下命令安装 React Router 的最新版本：

```bash
npm install react-router@next react-router-dom@next

```

#### react-keep-alive 中对于 eslint-plugin-react-hooks 的依赖

```bash
  npm i eslint-plugin-react-hooks -D
```
