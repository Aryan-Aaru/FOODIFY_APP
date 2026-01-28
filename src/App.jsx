import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FilterPage from './pages/FilterPage'
import SpecificDish from './pages/SpecificDish'
import NavFilter from './components/NavFilter'
import Admin from './pages/Admin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminDasboard from './pages/AdminDasboard'
import OrderManagement from './pages/OrderManagement'
import MenuPage from './pages/MenuPage'
import AdminRestaurent from './pages/AdminRestaurent'
import EarningPage from './pages/EarningPage'
function App() {

  return (
    // <>
    //   <FilterPage /> 
    // </>
    <BrowserRouter>
      <Routes>
        <Route path='/dish' element={<SpecificDish />}/>
        <Route path='/search' element={<FilterPage />} />
        <Route path='/admin' element={<Admin /> }>
          <Route index element={<AdminDasboard />} />
          <Route path="dashboard" element={<AdminDasboard />} />
          <Route path="orders" element={<OrderManagement />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="restaurants" element={<AdminRestaurent />} />
          <Route path="earnings" element={<EarningPage />} />
        </Route>
      </Routes>
  
       
       
     </BrowserRouter> 
  )
}

export default App
