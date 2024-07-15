import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import BlogHome from './components/Blog/BlogHome'
import BlogDetail from './components/Blog/BlogDetail'
import FormComponent from './components/Blog/FormComponent'
import Login from './components/Registration/Login'
import MyBlog from './components/Blog/MyBlog'
import EditBlog from './components/Blog/EditBlog'
import Register from './components/Registration/Register'

function App() {

  return (
    <BrowserRouter >

      <Routes>  
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Blog" element={<BlogHome />} />
      <Route path="/Blog/:id" element={<BlogDetail />} />
      <Route path="/Blog/form" element={<FormComponent/>} />
      <Route path="/Blog/form/:id" element={<EditBlog />} />
      <Route path="/Blog/MyBlog" element={<MyBlog />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App