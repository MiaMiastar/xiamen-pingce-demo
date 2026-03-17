import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Datasets from './pages/Datasets'
import Leaderboard from './pages/Leaderboard'
import LeaderboardDetail from './pages/LeaderboardDetail'
import TaskList from './pages/TaskList'
import TaskNew from './pages/TaskNew'
import TaskEdit from './pages/TaskEdit'
import Report from './pages/Report'
import ReportCompare from './pages/ReportCompare'
import ModelList from './pages/ModelList'
import ModelNew from './pages/ModelNew'
import ModelEdit from './pages/ModelEdit'
import Logs from './pages/Logs'
import Profile from './pages/Profile'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/datasets" replace />} />
          <Route path="datasets" element={<Datasets />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="leaderboard/:id" element={<LeaderboardDetail />} />
          <Route path="workbench/tasks" element={<TaskList />} />
          <Route path="workbench/tasks/new" element={<TaskNew />} />
          <Route path="workbench/tasks/:id/edit" element={<TaskEdit />} />
          <Route path="workbench/reports/:id" element={<Report />} />
          <Route path="workbench/reports/compare" element={<ReportCompare />} />
          <Route path="models" element={<ModelList />} />
          <Route path="models/new" element={<ModelNew />} />
          <Route path="models/:id/edit" element={<ModelEdit />} />
          <Route path="logs" element={<Logs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
