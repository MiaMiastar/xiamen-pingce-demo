import { useState, useMemo } from 'react'
import { mockDatasets } from '../data/mock'

export default function Datasets() {
  const [keyword, setKeyword] = useState('')
  const [domain, setDomain] = useState('')

  const list = useMemo(() => {
    return mockDatasets.filter((d) => {
      const matchName = !keyword || d.name.includes(keyword) || (d.desc && d.desc.includes(keyword))
      const matchDomain = !domain || d.domain === domain
      return matchName && matchDomain
    })
  }, [keyword, domain])

  const domains = [...new Set(mockDatasets.map((d) => d.domain))]

  return (
    <>
      <h1 className="page-title">评测数据集</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
        平台内置评测数据集的统一展示与检索
      </p>
      <div className="header-bar">
        <input
          className="search-input"
          placeholder="搜索数据集名称或描述"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <select
          className="dataset-select"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        >
          <option value="">全部领域</option>
          {domains.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>
      <div className="dataset-grid">
        {list.map((d) => (
          <div key={d.id} className="card dataset-card">
            <div className="dataset-card-header">
              <h3 className="dataset-card-title">{d.name}</h3>
              <span className="dataset-domain">{d.domain}</span>
            </div>
            <p className="dataset-card-desc">{d.desc}</p>
            <div className="dataset-card-meta">
              <span>样本量 {d.samples}</span>
              <span>更新于 {d.updatedAt}</span>
            </div>
          </div>
        ))}
      </div>
      {list.length === 0 && (
        <div className="card dataset-empty">
          <p style={{ margin: 0, color: 'var(--text-muted)' }}>暂无匹配的数据集</p>
        </div>
      )}
    </>
  )
}
