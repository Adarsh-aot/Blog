import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import BlogHome from './components/Blog/BlogHome'

function App() {

  return (
    <BrowserRouter >

      <Routes>  
        <Route path="/Blog" element={<BlogHome />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App