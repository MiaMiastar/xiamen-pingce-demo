import { useParams } from 'react-router-dom'
import { mockLeaderboardDetail } from '../data/mock'

export default function LeaderboardDetail() {
  const { id } = useParams()
  const data = mockLeaderboardDetail[id]

  if (!data) {
    return <p>榜单不存在</p>
  }

  const firstRow = data.rankings[0]
  const keys = firstRow ? Object.keys(firstRow).filter((k) => k !== 'rank' && k !== 'modelName') : []

  return (
    <>
      <h1 className="page-title">{data.name}</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
        周期：{data.cycle} · 榜单评测依据与评分逻辑说明
      </p>
      <div className="card" style={{ marginBottom: 24 }}>
        <h4 style={{ margin: '0 0 8px' }}>评测规则说明</h4>
        <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.6 }}>{data.ruleDesc}</p>
      </div>
      <div className="card">
        <h4 style={{ margin: '0 0 16px' }}>排名结果（前10名）</h4>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>排名</th>
                <th>模型名称</th>
                {keys.map((k) => (
                  <th key={k}>{k}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rankings.map((r) => (
                <tr key={r.rank}>
                  <td><strong>#{r.rank}</strong></td>
                  <td>{r.modelName}</td>
                  {keys.map((k) => (
                    <td key={k}>{r[k]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
