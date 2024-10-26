import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/login'
import './App.css'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  )
}

export default App

