import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const redirect = searchParams.get('redirect') || '/datasets'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username && password) {
      sessionStorage.setItem('eval_demo_login', '1')
      navigate(redirect)
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>供应链模型评测平台</h1>
        <p>支持企业级账号体系对接，请使用您的账号登录</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>账号</label>
            <input
              type="text"
              placeholder="请输入账号"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>密码</label>
            <input
              type="password"
              placeholder="请输入密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            登录
          </button>
        </form>
        <p style={{ marginTop: 16, fontSize: 12, color: 'var(--text-muted)' }}>
          Demo 模式：输入任意账号密码即可进入
        </p>
      </div>
    </div>
  )
}
