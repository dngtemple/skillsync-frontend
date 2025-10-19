import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import './App.css'
import Login from './login'
import Signup from './signup'
import Dashboard from './dashboard'
import StepperFeild from './stepperFeild'
import Notfound from './404'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Protected routes (require user to be signed in) */}
        <Route
          path="/"
          element={
            <SignedIn>
              <Dashboard />
            </SignedIn>
          }
        />

        <Route
          path="/stepper"
          element={
            <SignedIn>
              <StepperFeild />
            </SignedIn>
          }
        />

        {/* Public routes (accessible only when signed out) */}
        <Route
          path="/login"
          element={
            <SignedOut>
              <Login />
            </SignedOut>
          }
        />

        <Route
          path="/signup"
          element={
            <SignedOut>
              <Signup />
            </SignedOut>
          }
        />

        {/* Redirect unauthenticated users trying to access protected routes */}
        <Route
          path="*"
          element={
            <>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
              <SignedIn>
                <Notfound />
              </SignedIn>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
