import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getTaskById, setTasks, getModels, mockDatasets } from '../data/mock'

export default function TaskEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const task = getTaskById(id)
  const [name, setName] = useState('')
  const [modelId, setModelId] = useState('')
  const [datasetId, setDatasetId] = useState('')
  const models = getModels()
  const datasets = mockDatasets

  useEffect(() => {
    if (task) {
      setName(task.name)
      setModelId(task.modelId)
      setDatasetId(task.datasetId)
    }
  }, [task])

  if (!task) return <p>任务不存在</p>
  if (task.status !== 'draft' && task.status !== 'failed') {
    return (
      <div className="card">
        <p>仅支持对未执行或草稿状态的任务进行编辑。</p>
        <button type="button" className="btn btn-ghost" onClick={() => navigate('/workbench/tasks')}>返回列表</button>
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, name, modelId, datasetId } : t)))
    navigate('/workbench/tasks')
  }

  return (
    <>
      <h1 className="page-title">编辑评测任务</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
        修改任务名称、模型或评测数据集
      </p>
      <div className="card" style={{ maxWidth: 560 }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>任务名称</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>待评测模型</label>
            <select value={modelId} onChange={(e) => setModelId(e.target.value)} required>
              {models.map((m) => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>评测数据集</label>
            <select value={datasetId} onChange={(e) => setDatasetId(e.target.value)} required>
              {datasets.map((d) => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <button type="submit" className="btn btn-primary">保存</button>
            <button type="button" className="btn btn-ghost" onClick={() => navigate('/workbench/tasks')}>取消</button>
          </div>
        </form>
      </div>
    </>
  )
}
