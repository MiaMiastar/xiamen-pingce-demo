import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { getTasks, mockReports } from '../data/mock'

export default function ReportCompare() {
  const navigate = useNavigate()
  const tasks = getTasks().filter((t) => t.status === 'completed')
  const reports = tasks.map((t) => ({ ...mockReports[t.id], taskId: t.id })).filter(Boolean)

  const [selected, setSelected] = useState(reports.slice(0, 2).map((r) => r.taskId))

  const selectedReports = selected.map((id) => reports.find((r) => r.taskId === id)).filter(Boolean)

  const compareData = selectedReports.length
    ? selectedReports[0].metrics.map((m) => {
        const point = { metric: m.name }
        selectedReports.forEach((r, i) => {
          const met = r.metrics.find((x) => x.name === m.name)
          point[`报告${i + 1}`] = met ? met.value : 0
        })
        return point
      })
    : []

  const toggle = (id) => {
    if (selected.includes(id)) setSelected(selected.filter((x) => x !== id))
    else if (selected.length < 4) setSelected([...selected, id])
  }

  return (
    <>
      <div className="header-bar">
        <h1 className="page-title" style={{ margin: 0 }}>报告对比</h1>
        <button type="button" className="btn btn-ghost" onClick={() => navigate('/workbench/tasks')}>返回任务列表</button>
      </div>
      <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
        选择多个评测报告进行横向对比，展示不同模型在同一评测集下的指标差异
      </p>
      <div className="card">
        <h4 style={{ margin: '0 0 12px' }}>选择要对比的报告（最多 4 个）</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          {reports.map((r) => (
            <label key={r.taskId} style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={selected.includes(r.taskId)}
                onChange={() => toggle(r.taskId)}
                disabled={!selected.includes(r.taskId) && selected.length >= 4}
              />
              <span>{r.taskName}（{r.modelName}）</span>
            </label>
          ))}
        </div>
      </div>
      {selectedReports.length > 0 && (
        <>
          <div className="compare-cards">
            {selectedReports.map((r, i) => (
              <div key={r.taskId} className="compare-card">
                <h4>报告 {i + 1}：{r.taskName}</h4>
                <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)' }}>{r.modelName} · {r.datasetName}</p>
                <ul style={{ margin: '12px 0 0', paddingLeft: 20 }}>
                  {r.metrics.map((m) => (
                    <li key={m.name}>{m.name}: {m.value}{m.unit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {compareData.length > 0 && (
            <div className="card">
              <h4 style={{ margin: '0 0 12px' }}>指标对比图</h4>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={compareData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="metric" stroke="var(--text-muted)" />
                    <YAxis stroke="var(--text-muted)" />
                    <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }} />
                    <Legend />
                    <Bar dataKey="报告1" fill="var(--primary)" />
                    <Bar dataKey="报告2" fill="var(--success)" />
                    <Bar dataKey="报告3" fill="var(--warning)" />
                    <Bar dataKey="报告4" fill="#a78bfa" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}
