import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getModels, setModels } from '../data/mock'

export default function ModelNew() {
  const [name, setName] = useState('')
  const [provider, setProvider] = useState('平台自研')
  const [apiType, setApiType] = useState('OpenAI 兼容')
  const [apiBase, setApiBase] = useState('')
  const [apiKey, setApiKey] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return
    const id = 'm' + Date.now()
    setModels((prev) => [...prev, { id, name, provider, apiType, status: '可用' }])
    navigate('/models')
  }

  return (
    <>
      <h1 className="page-title">新建模型</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
        新增一个可用于评测的 API 模型，填写基础信息与调用参数
      </p>
      <div className="card" style={{ maxWidth: 560 }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>模型名称</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="如 SupplyGPT-Pro" required />
          </div>
          <div className="form-group">
            <label>提供方</label>
            <select value={provider} onChange={(e) => setProvider(e.target.value)}>
              <option>平台自研</option>
              <option>第三方</option>
            </select>
          </div>
          <div className="form-group">
            <label>API 类型</label>
            <select value={apiType} onChange={(e) => setApiType(e.target.value)}>
              <option>OpenAI 兼容</option>
              <option>自定义</option>
            </select>
          </div>
          <div className="form-group">
            <label>API Base URL（选填）</label>
            <input value={apiBase} onChange={(e) => setApiBase(e.target.value)} placeholder="https://api.example.com/v1" />
          </div>
          <div className="form-group">
            <label>API Key（选填）</label>
            <input type="password" value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="sk-..." />
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <button type="submit" className="btn btn-primary">保存</button>
            <button type="button" className="btn btn-ghost" onClick={() => navigate('/models')}>取消</button>
          </div>
        </form>
      </div>
    </>
  )
}
