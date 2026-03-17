import { useParams, useNavigate } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { mockReports } from '../data/mock'

export default function Report() {
  const { id } = useParams()
  const navigate = useNavigate()
  const report = mockReports[id]

  if (!report) {
    return (
      <div className="card">
        <p>暂无该任务的评测报告（Demo 中仅部分任务有预置报告数据）</p>
        <button type="button" className="btn btn-ghost" onClick={() => navigate('/workbench/tasks')}>返回任务列表</button>
      </div>
    )
  }

  const handleDownload = () => {
    const blob = new Blob(
      [`供应链模型评测报告\n\n任务：${report.taskName}\n模型：${report.modelName}\n数据集：${report.datasetName}\n完成时间：${report.completedAt}\n\n指标结果：\n${report.metrics.map((m) => `${m.name}: ${m.value}${m.unit}`).join('\n')}`],
      { type: 'text/plain;charset=utf-8' }
    )
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `评测报告-${report.taskName}-${report.completedAt.slice(0, 10)}.txt`
    a.click()
    URL.revokeObjectURL(a.href)
  }

  return (
    <>
      <div className="header-bar">
        <h1 className="page-title" style={{ margin: 0 }}>评测报告</h1>
        <button type="button" className="btn btn-primary" onClick={handleDownload}>下载报告</button>
      </div>
      <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
        {report.taskName} · 完整结果信息与图表展示
      </p>
      <div className="card">
        <h4 style={{ margin: '0 0 12px' }}>任务基础信息</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          <div><span style={{ color: 'var(--text-muted)' }}>任务名称</span><br />{report.taskName}</div>
          <div><span style={{ color: 'var(--text-muted)' }}>评测模型</span><br />{report.modelName}</div>
          <div><span style={{ color: 'var(--text-muted)' }}>评测数据集</span><br />{report.datasetName}</div>
          <div><span style={{ color: 'var(--text-muted)' }}>完成时间</span><br />{report.completedAt}</div>
        </div>
      </div>
      <div className="card">
        <h4 style={{ margin: '0 0 12px' }}>评测指标结果</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {report.metrics.map((m) => (
            <div key={m.name} style={{ padding: '12px 20px', background: 'var(--bg)', borderRadius: 'var(--radius)', minWidth: 140 }}>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{m.name}</div>
              <div style={{ fontSize: 20, fontWeight: 600 }}>{m.value}{m.unit}</div>
            </div>
          ))}
        </div>
      </div>
      {report.chartData && report.chartData.length > 0 && (() => {
        const keys = Object.keys(report.chartData[0])
        const xKey = keys[0]
        const valueKeys = keys.slice(1)
        const colors = ['var(--primary)', 'var(--success)', 'var(--warning)']
        return (
          <div className="card">
            <h4 style={{ margin: '0 0 12px' }}>效果图表</h4>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={report.chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey={xKey} stroke="var(--text-muted)" />
                  <YAxis stroke="var(--text-muted)" />
                  <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }} />
                  {valueKeys.map((dataKey, i) => (
                    <Line key={dataKey} type="monotone" dataKey={dataKey} stroke={colors[i] || colors[0]} strokeWidth={2} />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )
      })()}
      <button type="button" className="btn btn-ghost" onClick={() => navigate('/workbench/tasks')}>返回任务列表</button>
    </>
  )
}
