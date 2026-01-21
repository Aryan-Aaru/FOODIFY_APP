import React from 'react'
import burger from "../assets/burger.avif";
import vegBurger from "../assets/vegBurger.avif";
import { GoPlus } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
const Items = () => {

  return (
    <div className='flex flex-col gap-6'>
      <div className="space-y-6">
        <div className="relative  flex gap-5 bg-white rounded-2xl p-5 shadow-sm">
          <MdDelete className="absolute top-3 right-3 text-gray-400 cursor-pointer hover:text-red-600 text-lg" />
          <img src={burger} className="h-20 w-20 rounded-lg object-cover" />
          <div className="flex-1">
            <h2 className="font-semibold">Double Cheeseburger</h2>
            <p className="text-sm text-gray-500">Medium Rare • Extra Cheese</p>
            <p className="text-red-500 font-semibold mt-2">$12.50</p>
          </div>
          <div className="absolute bottom-3 right-3 flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-1">
            <FiMinus /> <span>1</span> <GoPlus />
          </div>
        </div>
      </div>

    
      <div className="relative  flex gap-5 bg-white rounded-2xl p-5 shadow-sm">
        <MdDelete className="absolute top-3 right-3 cursor-pointer hover:text-red-600 text-gray-400 text-lg" />
        <img src={vegBurger} className="h-20 w-20 rounded-lg object-cover" />
        <div className="flex-1">
          <h2 className="font-semibold">Veg Burger</h2>
          <p className="text-sm text-gray-500">Fresh Veggies • Cheese</p>
          <p className="text-red-500 font-semibold mt-2">$17.98</p>
        </div>
        <div className="absolute bottom-3 right-3 flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-1">
          <FiMinus /> <span>2</span> <GoPlus />
        </div>
      </div>
      
    </div>
  )
}

export default Items