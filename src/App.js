import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './page/home'
import DashboardPage from './page/dash'
import AuthPage from './page/auth'
import DownloadPage from './page/dwnld'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/dash' element={<DashboardPage/>}/>
        <Route path='/login' element={<AuthPage/>}/>
        <Route path='/dwnld' element={<DownloadPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
