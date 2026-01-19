import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FilterPage from './pages/FilterPage'
import SpecificDish from './pages/SpecificDish'
import NavFilter from './components/NavFilter'
import Admin from './pages/Admin'
function App() {

  return (
    <>
      {/* <FilterPage /> */}
      {/* <NavFilter /> */}
      <SpecificDish />
      {/* <Admin /> */}
    </>
  )
}

export default App
