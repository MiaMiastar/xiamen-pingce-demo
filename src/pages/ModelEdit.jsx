import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getModels, setModels } from '../data/mock'

export default function ModelEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const models = getModels()
  const model = models.find((m) => m.id === id)
  const [name, setName] = useState('')
  const [provider, setProvider] = useState('')
  const [apiType, setApiType] = useState('')

  useEffect(() => {
    if (model) {
      setName(model.name)
      setProvider(model.provider)
      setApiType(model.apiType)
    }
  }, [model])

  if (!model) return <p>模型不存在</p>

  const handleSubmit = (e) => {
    e.preventDefault()
    setModels((prev) => prev.map((m) => (m.id === id ? { ...m, name, provider, apiType } : m)))
    navigate('/models')
  }

  return (
    <>
      <h1 className="page-title">编辑模型</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
        修改已创建模型的基础信息与 API 配置
      </p>
      <div className="card" style={{ maxWidth: 560 }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>模型名称</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required />
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
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <button type="submit" className="btn btn-primary">保存</button>
            <button type="button" className="btn btn-ghost" onClick={() => navigate('/models')}>取消</button>
          </div>
        </form>
      </div>
    </>
  )
}
