import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Login from './pages/login'
import Groups from './pages/groups'
import Leaderboard from './pages/Leaderboard'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login user={user} setUser={setUser}/>} />
          <Route path="/" element={user ? <Groups user={user}/> : <Navigate to="/login" replace />}/>
          <Route path="/leaderboard" element={<Leaderboard user={user}/>} />
        </Routes>
    </Router>
  )
}

export default App