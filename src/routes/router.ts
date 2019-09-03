import Task from '../container/Task'
import User from '../container/User'
import List from '../container/List'
import { RouteProps } from 'react-router'
import Login from '../container/Login'
import NotFound from '../container/NotFound'
import IndexHome from '../container/IndexHome'
import Sidebar from '../container/Layout/Sidebar'

export interface RouteItem {
  path: string
  key: string
  component: React.ComponentType<any>
  requiresAuth?: boolean
  exact?: RouteProps['exact']
  strict?: RouteProps['strict']
}

/* routes 集中管理 */
const routes: RouteItem[] = [
  {
    path: '/',
    key: 'home',
    component: IndexHome,
    exact: true,
    requiresAuth: false
  },
  {
    path: '/layout',
    key: 'layout',
    component: Sidebar,
    requiresAuth: false
  },
  {
    path: '/task',
    key: '/task',
    component: Task,
    requiresAuth: true // 需要登录才可见
  },
  {
    path: '/user',
    key: '/user',
    component: User,
    requiresAuth: true // 需要登录才可见
  },
  {
    path: '/list',
    key: '/list',
    component: List,
    requiresAuth: true // 需要登录才可见
  },
  {
    path: '/login',
    key: '/login',
    component: Login,
    requiresAuth: false
  },
  {
    path: '*',
    key: 'notFound',
    component: NotFound,
    requiresAuth: false
  }
]

export default routes
