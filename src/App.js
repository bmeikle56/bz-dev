import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../src/home/page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="/support" element={<Support/>}/>
        <Route path="/privacy" element={<Privacy/>}/> */}
      </Routes>
    </Router>
  )
}

export default App
