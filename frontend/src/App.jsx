import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Login from './pages/login'
import Groups from './pages/groups'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/groups" element={<Groups />}/>
        </Routes>
    </Router>
  )
}

export default App