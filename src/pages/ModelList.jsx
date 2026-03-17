import { Link, useNavigate } from 'react-router-dom'
import { getModels, setModels } from '../data/mock'

export default function ModelList() {
  const models = getModels()
  const navigate = useNavigate()

  const handleDelete = (id, name) => {
    if (window.confirm(`确定删除模型「${name}」？删除后不可再用于新建评测任务。`)) {
      setModels((prev) => prev.filter((m) => m.id !== id))
    }
  }

  return (
    <>
      <div className="header-bar">
        <h1 className="page-title" style={{ margin: 0 }}>模型管理</h1>
        <Link to="/models/new" className="btn btn-primary">新建模型</Link>
      </div>
      <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
        管理平台接入的评测模型，作为评测任务的可选模型来源
      </p>
      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>模型名称</th>
                <th>提供方</th>
                <th>API 类型</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {models.map((m) => (
                <tr key={m.id}>
                  <td><strong>{m.name}</strong></td>
                  <td>{m.provider}</td>
                  <td>{m.apiType}</td>
                  <td><span className="badge badge-success">{m.status}</span></td>
                  <td>
                    <Link to={`/models/${m.id}/edit`} className="btn btn-ghost btn-sm">编辑</Link>
                    <button type="button" className="btn btn-ghost btn-sm" onClick={() => handleDelete(m.id, m.name)}>删除</button>
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
