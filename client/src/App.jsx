import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
