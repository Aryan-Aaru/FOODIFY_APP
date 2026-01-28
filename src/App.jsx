import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavFilter from './components/NavFilter'
import HomePage from './pages/HomePage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// function App() {

import React from 'react'
import MyCart from './Pages/MyCart'
import Restaurent from './Pages/Restaurent'
import OrderConfirm from './Pages/OrderConfirm'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage />}/>
        <Route path="/restaurent" element={<Restaurent />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/order-confirm" element={<OrderConfirm />} />

      </Routes>
      
    </BrowserRouter>
  )
}


export default App;