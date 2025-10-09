import { useState } from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './login'
import Signup from './signup'
import Dashboard from './dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
         </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
