import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../src/home/page'
import DashboardPage from '../src/dash/page'
import AuthPage from '../src/auth/page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/login" element={<AuthPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
