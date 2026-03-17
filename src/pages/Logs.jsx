import { mockLogs } from '../data/mock'

export default function Logs() {
  return (
    <>
      <h1 className="page-title">操作日志</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
        记录平台内用户的关键操作行为，便于问题追溯与系统审计
      </p>
      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>时间</th>
                <th>操作</th>
                <th>操作人</th>
                <th>结果</th>
                <th>详情</th>
              </tr>
            </thead>
            <tbody>
              {mockLogs.map((log) => (
                <tr key={log.id}>
                  <td>{log.time}</td>
                  <td>{log.action}</td>
                  <td>{log.operator}</td>
                  <td><span className="badge badge-success">{log.result}</span></td>
                  <td style={{ color: 'var(--text-muted)' }}>{log.detail ?? '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
