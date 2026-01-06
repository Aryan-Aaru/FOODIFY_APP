import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FilterPage from './pages/FilterPage'
import SpecificDish from './pages/SpecificDish'
// import navFilter from './components/NavFilter'
function App() {

  return (
    <>
      {/* <FilterPage /> */}
      {/* <navFilter /> */}
      <SpecificDish />
    </>
  )
}

export default App
