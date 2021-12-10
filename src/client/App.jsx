
import React from 'react'
import { Routes, Route } from 'react-router'
import Contact from './pages/Contact'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
