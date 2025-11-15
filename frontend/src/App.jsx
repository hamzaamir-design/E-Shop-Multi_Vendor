import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage, ActivationPage, SignupPage } from './Routes.js'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={ <LoginPage/>} />
        <Route path='/sign-up' element={ <SignupPage/>} />
        <Route path='/activation/:activation_token' element={ <ActivationPage/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App