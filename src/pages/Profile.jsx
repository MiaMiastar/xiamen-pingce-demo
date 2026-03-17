import { useState } from 'react'
import { mockUser } from '../data/mock'

export default function Profile() {
  const [name, setName] = useState(mockUser.name)
  const [email, setEmail] = useState(mockUser.email)
  const [org, setOrg] = useState(mockUser.org)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Demo 模式：个人信息已保存（未持久化）')
  }

  return (
    <>
      <h1 className="page-title">个人信息</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
        查看与修改个人基础信息
      </p>
      <div className="card" style={{ maxWidth: 480 }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>姓名</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>邮箱</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>所属组织</label>
            <input value={org} onChange={(e) => setOrg(e.target.value)} />
          </div>
          <div className="form-group">
            <label>角色</label>
            <input value={mockUser.role} disabled style={{ opacity: 0.8 }} />
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginTop: 8 }}>保存修改</button>
        </form>
      </div>
    </>
  )
}
