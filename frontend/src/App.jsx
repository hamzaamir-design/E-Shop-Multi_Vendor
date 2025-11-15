import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage, ActivationPage, SignupPage } from './Routes.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { use } from 'react';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    axios.get(`${server}/user/getUser`, { withCredentials: true })
    .then((res) => {
      toast.success(res.data.message);
    })
      .catch((err) => {
        toast.error(err.response.data.message);
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignupPage />} />
        <Route path='/activation/:activation_token' element={<ActivationPage />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>

  )
}

export default App