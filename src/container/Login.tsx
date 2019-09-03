import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { Button } from 'antd'

const Login: FC<RouteComponentProps> = props => {
  const onClick = () => {
    const { from } = props.location.state || { from: { pathname: '/' } }
    // authed = true
    window.localStorage.setItem('authed', 'true')
    // 跳转之前的页面
    props.history.push(from.pathname)
  }
  return (
    <div>
      <h4>Login</h4>
      <Button onClick={onClick}>登录</Button>
    </div>
  )
}

export default Login
