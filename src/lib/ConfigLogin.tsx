import React, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface AppProps extends RouteComponentProps {
  children?: React.ReactNode
  isLogin?: boolean
}
class App extends Component<AppProps> {
  // static propTypes = {
  //   children: PropTypes.object,
  //   location: PropTypes.object,
  //   isLogin: PropTypes.bool,
  //   history: PropTypes.object
  // }
  componentDidMount() {
    if (!this.props.isLogin) {
      setTimeout(() => {
        this.props.history.push('/login')
      }, 300)
    }
    if (this.props.isLogin && this.props.location.pathname === '/login') {
      setTimeout(() => {
        this.props.history.push('/')
      }, 300)
    }
  }

  componentDidUpdate() {
    if (!this.props.isLogin) {
      setTimeout(() => {
        this.props.history.push('/login')
      }, 300)
    }
  }
  render() {
    return this.props.children
  }
}

export default withRouter(App)
