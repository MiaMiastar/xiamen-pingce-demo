import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getModels, mockDatasets, setTasks, getTasks } from '../data/mock'

export default function TaskNew() {
  const [name, setName] = useState('')
  const [modelId, setModelId] = useState('')
  const [datasetId, setDatasetId] = useState('')
  const navigate = useNavigate()
  const models = getModels()
  const datasets = mockDatasets

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !modelId || !datasetId) return
    const id = 't' + Date.now()
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ')
    setTasks((prev) => [...prev, { id, name, modelId, datasetId, status: 'running', createdAt, completedAt: null, score: null }])
    navigate('/workbench/tasks')
  }

  return (
    <>
      <h1 className="page-title">新建评测任务</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
        选择待评测模型与数据集，完成基础配置后提交执行
      </p>
      <div className="card" style={{ maxWidth: 560 }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>任务名称</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="请输入任务名称" required />
          </div>
          <div className="form-group">
            <label>待评测模型</label>
            <select value={modelId} onChange={(e) => setModelId(e.target.value)} required>
              <option value="">请选择模型</option>
              {models.map((m) => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>评测数据集</label>
            <select value={datasetId} onChange={(e) => setDatasetId(e.target.value)} required>
              <option value="">请选择数据集</option>
              {datasets.map((d) => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <button type="submit" className="btn btn-primary">提交并执行</button>
            <button type="button" className="btn btn-ghost" onClick={() => navigate('/workbench/tasks')}>取消</button>
          </div>
        </form>
      </div>
    </>
  )
}
