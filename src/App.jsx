
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './login'
import Signup from './signup'
import Dashboard from './dashboard'
import StepperFeild from './stepperFeild'
import Notfound from './404'

function App() {

  return (
    <>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path="/stepper" element={<StepperFeild/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='*' element={<Notfound/>}></Route>
         </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

