import { Link } from 'react-router-dom'
import { mockLeaderboards, mockLeaderboardDetail } from '../data/mock'

const TOP_N = 10

export default function Leaderboard() {
  return (
    <>
      <h1 className="page-title">榜单</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
        平台内所有已发布榜单的汇总，支持查看不同时间周期的榜单结果
      </p>
      <div className="header-bar">
        <select
          style={{ width: 160, padding: '8px 12px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', color: 'var(--text)' }}
        >
          <option>2025-Q1</option>
          <option>2024-Q4</option>
          <option>2024-Q3</option>
        </select>
      </div>
      <div className="leaderboard-grid">
        {mockLeaderboards.map((lb) => {
          const detail = mockLeaderboardDetail[lb.id]
          const top10 = detail?.rankings?.slice(0, TOP_N) ?? []
          return (
            <div key={lb.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                <div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 15, fontWeight: 500 }}>{lb.name}</h3>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: 12 }}>
                    {lb.cycle} · {lb.publishedAt}
                  </p>
                  <p style={{ margin: '6px 0 0', fontSize: 12, color: 'var(--text-muted)' }}>{lb.ruleDesc}</p>
                </div>
                <Link to={`/leaderboard/${lb.id}`} className="btn btn-primary">查看详情</Link>
              </div>
              {top10.length > 0 && (
                <div className="leaderboard-top10">
                  <h4 style={{ margin: '0 0 6px', fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>前{TOP_N}名</h4>
                  <div className="table-wrap">
                    <table>
                      <thead>
                        <tr>
                          <th>排名</th>
                          <th>模型名称</th>
                          <th>综合得分</th>
                        </tr>
                      </thead>
                      <tbody>
                        {top10.map((r) => (
                          <tr key={r.rank}>
                            <td><strong>#{r.rank}</strong></td>
                            <td>{r.modelName}</td>
                            <td>{r.score}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}
