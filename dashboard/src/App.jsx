import './App.css'
import React from 'react'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  )
}

export default App