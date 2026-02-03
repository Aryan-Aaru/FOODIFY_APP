import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FilterPage from './pages/FilterPage'
import SpecificDish from './pages/SpecificDish'
import NavFilter from './components/NavFilter'
import Admin from './pages/Admin'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminDasboard from './pages/AdminDasboard'
import OrderManagement from './pages/OrderManagement'
import MenuPage from './pages/MenuPage'
import AdminRestaurent from './pages/AdminRestaurent'
import EarningPage from './pages/EarningPage'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PartnerLogin from "./pages/PartnerLogin";
import PartnerSignup from "./pages/PartnerSignup";
import AuthenticatePage from "./pages/AuthenticatePage";
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";
import Restaurent from "./Pages/Restaurent";
import OrderConfirm from "./Pages/OrderConfirm";
import MyCart from "./Pages/MyCart";

function App() {

  return (
    // <>
    //   <FilterPage /> 
    // </>
    <BrowserRouter>
      <Routes>
        <Route path='/dish/:restaurantId/:foodId' element={<SpecificDish />}/>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<AuthenticatePage />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/partner/login" element={<PartnerLogin />} />
        <Route path="/partner/signup" element={<PartnerSignup />} />
      </Routes>
      <Routes>
        <Route path='/home' element={<HomePage />}/>
        <Route path="/restaurent/:id" element={<Restaurent />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/order-confirm" element={<OrderConfirm />} />

      </Routes>
       
       
     </BrowserRouter> 
  )

}

export default App;
