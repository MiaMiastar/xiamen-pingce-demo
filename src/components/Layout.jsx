import { Outlet, useLocation, Navigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import TopNav from './TopNav'
import './Layout.css'

export default function Layout() {
  const location = useLocation()
  const logged = !!sessionStorage.getItem('eval_demo_login')
  const isWorkbench = location.pathname.startsWith('/workbench')

  // 未登录访问工作台 → 跳转登录
  if (isWorkbench && !logged) {
    return <Navigate to="/login" replace />
  }
  // 未登录访问需登录页
  if ((location.pathname === '/logs' || location.pathname === '/profile') && !logged) {
    return <Navigate to="/login" replace />
  }

  const showSidebar = logged && isWorkbench

  return (
    <div className="app-layout app-layout-with-topnav">
      <TopNav />
      <div className="app-layout-body">
        {showSidebar && (
          <aside className="sidebar workbench-sidebar">
            <nav>
              <ul className="sidebar-nav">
                <li><NavLink to="/workbench/tasks" end>评测管理</NavLink></li>
                <li><NavLink to="/models">模型管理</NavLink></li>
              </ul>
            </nav>
          </aside>
        )}
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
