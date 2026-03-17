import { Link, useNavigate } from 'react-router-dom'
import { getTasks, setTasks, getModels, mockDatasets } from '../data/mock'

const statusMap = { completed: '已完成', running: '执行中', draft: '草稿', failed: '失败' }
const statusClass = { completed: 'badge-success', running: 'badge-warning', draft: 'badge-default', failed: 'badge-danger' }

export default function TaskList() {
  const tasks = getTasks()
  const models = getModels()
  const datasets = mockDatasets
  const navigate = useNavigate()

  const getModelName = (id) => models.find((m) => m.id === id)?.name ?? id
  const getDatasetName = (id) => datasets.find((d) => d.id === id)?.name ?? id

  const handleDelete = (id, name) => {
    if (window.confirm(`确定删除任务「${name}」？删除后不可恢复。`)) {
      setTasks((prev) => prev.filter((t) => t.id !== id))
    }
  }

  return (
    <>
      <div className="header-bar">
        <h1 className="page-title" style={{ margin: 0 }}>评测管理</h1>
        <div style={{ display: 'flex', gap: 8 }}>
          <Link to="/workbench/reports/compare" className="btn btn-ghost">报告对比</Link>
          <Link to="/workbench/tasks/new" className="btn btn-primary">新建任务</Link>
        </div>
      </div>
      <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
        统一管理所有评测任务，支持查看、编辑与删除
      </p>
      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>任务名称</th>
                <th>模型</th>
                <th>数据集</th>
                <th>状态</th>
                <th>得分</th>
                <th>创建时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t) => (
                <tr key={t.id}>
                  <td><strong>{t.name}</strong></td>
                  <td>{getModelName(t.modelId)}</td>
                  <td>{getDatasetName(t.datasetId)}</td>
                  <td><span className={`badge ${statusClass[t.status] || 'badge-default'}`}>{statusMap[t.status]}</span></td>
                  <td>{t.score != null ? t.score : '-'}</td>
                  <td>{t.createdAt}</td>
                  <td>
                    {t.status === 'completed' && (
                      <button type="button" className="btn btn-ghost btn-sm" onClick={() => navigate(`/workbench/reports/${t.id}`)}>报告</button>
                    )}
                    {(t.status === 'draft' || t.status === 'failed') && (
                      <Link to={`/workbench/tasks/${t.id}/edit`} className="btn btn-ghost btn-sm">编辑</Link>
                    )}
                    <button type="button" className="btn btn-ghost btn-sm" onClick={() => handleDelete(t.id, t.name)}>删除</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
