import { useState, useRef, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { mockUser } from '../data/mock'
import './TopNav.css'

export default function TopNav() {
  const [userOpen, setUserOpen] = useState(false)
  const ref = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()
  const logged = !!sessionStorage.getItem('eval_demo_login')

  useEffect(() => {
    function close(e) {
      if (ref.current && !ref.current.contains(e.target)) setUserOpen(false)
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  const handleWorkbenchClick = (e) => {
    if (!logged) {
      e.preventDefault()
      navigate('/login?redirect=/workbench/tasks')
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('eval_demo_login')
    setUserOpen(false)
    navigate('/login')
  }

  return (
    <header className="topnav">
      <div className="topnav-inner">
        <NavLink to="/" className="topnav-brand">供应链模型评测</NavLink>
        <nav className="topnav-links">
          <NavLink to="/leaderboard" className={({ isActive }) => isActive ? 'active' : ''}>榜单</NavLink>
          <NavLink to="/datasets" className={({ isActive }) => isActive ? 'active' : ''}>数据集</NavLink>
          <NavLink
            to="/workbench/tasks"
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={handleWorkbenchClick}
          >
            工作台
          </NavLink>
        </nav>
        <div className="topnav-user" ref={ref}>
          {logged ? (
            <>
              <button
                type="button"
                className="topnav-user-trigger"
                onClick={() => setUserOpen((v) => !v)}
                aria-expanded={userOpen}
              >
                {mockUser.name}
                <span className="topnav-user-arrow">▼</span>
              </button>
              {userOpen && (
                <div className="topnav-user-dropdown">
                  <div className="topnav-user-info">{mockUser.name} · {mockUser.org}</div>
                  <NavLink to="/logs" className="topnav-user-item" onClick={() => setUserOpen(false)}>操作日志</NavLink>
                  <NavLink to="/profile" className="topnav-user-item" onClick={() => setUserOpen(false)}>个人信息</NavLink>
                  <button type="button" className="topnav-user-item topnav-user-logout" onClick={handleLogout}>退出登录</button>
                </div>
              )}
            </>
          ) : (
            <NavLink to="/login" className="topnav-login">登录</NavLink>
          )}
        </div>
      </div>
    </header>
  )
}
