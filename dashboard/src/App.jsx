import './App.css'
import { Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './components/Home' 

const App = () => {
  return (
    // <Routes>
    //   <Route path="/*" element={<Home />} />
    // </Routes>
    <Home />
  )
}

export default App