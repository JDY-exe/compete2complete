import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/login'
import Groups from './pages/groups'
import './App.css'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Groups />}/>
        </Routes>
    </Router>
  )
}

export default App