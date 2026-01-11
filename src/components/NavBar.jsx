import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
const NavBar = () => {
  return (
    <div>
       {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <FaArrowLeft />
          <h2 className="text-xl font-semibold">My Cart</h2>
        </div>
        <button className="text-red-500 font-medium">Clear All</button>
      </div>
    </div>
  )
}

export default NavBar