// 供应链模型评测 Demo - 前端 Mock 数据

export const mockUser = {
  id: 'u1',
  name: '张明',
  email: 'zhangming@supplychain.com',
  org: '厦门供应链科技',
  role: '评测管理员',
  avatar: null,
}

export const mockDatasets = [
  { id: 'ds1', name: '供应链需求预测评测集', domain: '需求预测', samples: 1200, updatedAt: '2025-03-01', desc: '覆盖多品类、多周期的需求预测场景' },
  { id: 'ds2', name: '库存优化决策评测集', domain: '库存优化', samples: 800, updatedAt: '2025-02-28', desc: '安全库存、再订货点、补货策略等' },
  { id: 'ds3', name: '供应商评估问答集', domain: '供应商管理', samples: 500, updatedAt: '2025-02-25', desc: '供应商资质、绩效、风险问答' },
  { id: 'ds4', name: '物流路径规划评测集', domain: '物流规划', samples: 600, updatedAt: '2025-02-20', desc: '运输路径、装载率、成本优化' },
  { id: 'ds5', name: '采购合同条款理解集', domain: '采购', samples: 400, updatedAt: '2025-02-15', desc: '合同条款抽取与合规判断' },
]

export const mockLeaderboards = [
  { id: 'lb1', name: '供应链需求预测能力榜', cycle: '2025-Q1', publishedAt: '2025-03-05', datasetId: 'ds1', ruleDesc: '综合准确率、MAPE、偏差对称性加权' },
  { id: 'lb2', name: '库存优化决策榜', cycle: '2025-Q1', publishedAt: '2025-03-01', datasetId: 'ds2', ruleDesc: '成本节约率、服务水平、周转率' },
  { id: 'lb3', name: '供应商问答能力榜', cycle: '2024-Q4', publishedAt: '2024-12-20', datasetId: 'ds3', ruleDesc: '准确率、召回率、F1' },
]

export const mockLeaderboardDetail = {
  lb1: {
    name: '供应链需求预测能力榜',
    cycle: '2025-Q1',
    ruleDesc: '本榜单依据「供应链需求预测评测集」，从准确率(40%)、MAPE(30%)、偏差对称性(30%)三个维度加权计算综合得分。',
    rankings: [
      { rank: 1, modelName: 'SupplyGPT-Pro', score: 92.5, accuracy: 91, mape: 8.2, bias: 0.95 },
      { rank: 2, modelName: 'ChainForecast-7B', score: 89.3, accuracy: 88, mape: 9.5, bias: 0.92 },
      { rank: 3, modelName: 'LogiMind-13B', score: 86.1, accuracy: 85, mape: 11.0, bias: 0.88 },
      { rank: 4, modelName: 'SC-Base-6B', score: 82.4, accuracy: 81, mape: 12.8, bias: 0.85 },
      { rank: 5, modelName: 'ForecastNet-8B', score: 79.8, accuracy: 78, mape: 13.5, bias: 0.82 },
      { rank: 6, modelName: 'DemandLM-10B', score: 77.2, accuracy: 76, mape: 14.2, bias: 0.80 },
      { rank: 7, modelName: 'StockOpt-5B', score: 74.5, accuracy: 73, mape: 15.0, bias: 0.78 },
      { rank: 8, modelName: 'VendorQA-12B', score: 71.9, accuracy: 70, mape: 15.8, bias: 0.76 },
      { rank: 9, modelName: 'RoutePlan-7B', score: 69.2, accuracy: 68, mape: 16.5, bias: 0.74 },
      { rank: 10, modelName: 'InventoryGPT-6B', score: 66.8, accuracy: 65, mape: 17.2, bias: 0.72 },
    ],
  },
  lb2: {
    name: '库存优化决策榜',
    cycle: '2025-Q1',
    ruleDesc: '依据「库存优化决策评测集」，按成本节约率(50%)、服务水平(30%)、库存周转率(20%)加权。',
    rankings: [
      { rank: 1, modelName: 'SupplyGPT-Pro', score: 88.2, costSave: 15.2, serviceLevel: 98.5, turnover: 6.2 },
      { rank: 2, modelName: 'ChainForecast-7B', score: 85.0, costSave: 12.1, serviceLevel: 97.0, turnover: 5.8 },
      { rank: 3, modelName: 'LogiMind-13B', score: 81.3, costSave: 10.5, serviceLevel: 96.2, turnover: 5.5 },
      { rank: 4, modelName: 'InventoryGPT-6B', score: 78.5, costSave: 9.2, serviceLevel: 95.0, turnover: 5.2 },
      { rank: 5, modelName: 'StockOpt-5B', score: 75.1, costSave: 8.0, serviceLevel: 94.0, turnover: 4.9 },
      { rank: 6, modelName: 'SC-Base-6B', score: 71.8, costSave: 6.8, serviceLevel: 92.8, turnover: 4.6 },
      { rank: 7, modelName: 'ForecastNet-8B', score: 68.4, costSave: 5.5, serviceLevel: 91.5, turnover: 4.3 },
      { rank: 8, modelName: 'DemandLM-10B', score: 65.0, costSave: 4.2, serviceLevel: 90.2, turnover: 4.0 },
      { rank: 9, modelName: 'RoutePlan-7B', score: 61.6, costSave: 3.0, serviceLevel: 88.8, turnover: 3.7 },
      { rank: 10, modelName: 'VendorQA-12B', score: 58.2, costSave: 1.8, serviceLevel: 87.5, turnover: 3.4 },
    ],
  },
  lb3: {
    name: '供应商问答能力榜',
    cycle: '2024-Q4',
    ruleDesc: '基于「供应商评估问答集」，采用准确率、召回率、F1 等指标综合评分。',
    rankings: [
      { rank: 1, modelName: 'SupplyGPT-Pro', score: 90.1, accuracy: 89, recall: 91, f1: 90 },
      { rank: 2, modelName: 'LogiMind-13B', score: 87.5, accuracy: 86, recall: 89, f1: 87.5 },
      { rank: 3, modelName: 'ChainForecast-7B', score: 84.2, accuracy: 83, recall: 85, f1: 84 },
      { rank: 4, modelName: 'VendorQA-12B', score: 81.8, accuracy: 80, recall: 83, f1: 81.5 },
      { rank: 5, modelName: 'SC-Base-6B', score: 79.0, accuracy: 77, recall: 81, f1: 79 },
      { rank: 6, modelName: 'DemandLM-10B', score: 76.2, accuracy: 74, recall: 78, f1: 76 },
      { rank: 7, modelName: 'ForecastNet-8B', score: 73.5, accuracy: 71, recall: 76, f1: 73.5 },
      { rank: 8, modelName: 'StockOpt-5B', score: 70.8, accuracy: 68, recall: 73, f1: 70.5 },
      { rank: 9, modelName: 'RoutePlan-7B', score: 68.0, accuracy: 65, recall: 71, f1: 68 },
      { rank: 10, modelName: 'InventoryGPT-6B', score: 65.2, accuracy: 62, recall: 68, f1: 65 },
    ],
  },
}

export const mockModels = [
  { id: 'm1', name: 'SupplyGPT-Pro', provider: '平台自研', apiType: 'OpenAI 兼容', status: '可用' },
  { id: 'm2', name: 'ChainForecast-7B', provider: '第三方', apiType: 'OpenAI 兼容', status: '可用' },
  { id: 'm3', name: 'LogiMind-13B', provider: '第三方', apiType: '自定义', status: '可用' },
  { id: 'm4', name: 'SC-Base-6B', provider: '平台自研', apiType: 'OpenAI 兼容', status: '可用' },
]

const now = new Date().toISOString().slice(0, 19).replace('T', ' ')
export const createMockTasks = () => [
  { id: 't1', name: '需求预测-3月评测', modelId: 'm1', datasetId: 'ds1', status: 'completed', createdAt: '2025-03-06 10:00', completedAt: '2025-03-06 10:15', score: 92.5 },
  { id: 't2', name: '库存优化多模型对比', modelId: 'm2', datasetId: 'ds2', status: 'running', createdAt: '2025-03-07 14:00', completedAt: null, score: null },
  { id: 't3', name: '供应商问答测试', modelId: 'm3', datasetId: 'ds3', status: 'draft', createdAt: '2025-03-08 09:00', completedAt: null, score: null },
  { id: 't4', name: '物流路径规划评测', modelId: 'm1', datasetId: 'ds4', status: 'completed', createdAt: '2025-03-05 11:00', completedAt: '2025-03-05 11:22', score: 85.2 },
]

export const mockReports = {
  t1: {
    taskName: '需求预测-3月评测',
    modelName: 'SupplyGPT-Pro',
    datasetName: '供应链需求预测评测集',
    completedAt: '2025-03-06 10:15',
    metrics: [
      { name: '准确率', value: 91, unit: '%' },
      { name: 'MAPE', value: 8.2, unit: '%' },
      { name: '偏差对称性', value: 0.95, unit: '' },
      { name: '综合得分', value: 92.5, unit: '' },
    ],
    chartData: [
      { period: 'W1', actual: 92, pred: 91.2 },
      { period: 'W2', actual: 88, pred: 87.5 },
      { period: 'W3', actual: 95, pred: 94.1 },
      { period: 'W4', actual: 89, pred: 88.8 },
    ],
  },
  t4: {
    taskName: '物流路径规划评测',
    modelName: 'SupplyGPT-Pro',
    datasetName: '物流路径规划评测集',
    completedAt: '2025-03-05 11:22',
    metrics: [
      { name: '路径成本优化率', value: 12.5, unit: '%' },
      { name: '装载率', value: 87, unit: '%' },
      { name: '综合得分', value: 85.2, unit: '' },
    ],
    chartData: [
      { period: '路线A', cost: 100, optimized: 88 },
      { period: '路线B', cost: 95, optimized: 82 },
      { period: '路线C', cost: 110, optimized: 96 },
    ],
  },
}

export const mockLogs = [
  { id: 1, action: '登录系统', operator: '张明', time: '2025-03-08 09:00:12', result: '成功' },
  { id: 2, action: '创建评测任务', operator: '张明', time: '2025-03-08 09:15:33', result: '成功', detail: '需求预测-3月评测' },
  { id: 3, action: '删除评测任务', operator: '张明', time: '2025-03-07 16:20:00', result: '成功', detail: '旧版需求预测任务' },
  { id: 4, action: '新增模型', operator: '李华', time: '2025-03-06 14:00:00', result: '成功', detail: 'SC-Base-6B' },
  { id: 5, action: '下载评测报告', operator: '张明', time: '2025-03-06 10:30:00', result: '成功', detail: '需求预测-3月评测' },
]

// 简单内存 store，用于 Demo 内增删改
let tasks = createMockTasks()
export function getTasks() {
  return [...tasks]
}
export function setTasks(next) {
  tasks = typeof next === 'function' ? next(tasks) : next
}
export function getTaskById(id) {
  return tasks.find((t) => t.id === id)
}

let models = [...mockModels]
export function getModels() {
  return [...models]
}
export function setModels(next) {
  models = typeof next === 'function' ? next(models) : next
}
