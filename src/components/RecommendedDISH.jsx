import React from 'react'
import { FaPlus } from "react-icons/fa6";
import coca from '../assets/coca.avif'
const RecommendedDISH = () => {
  return (
    <div>

      <div>
<h2 className="font-semibold mt-8 mb-4">Complete your meal</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
{["Coca Cola", "French Fries", "Choco Cookie"].map((item, i) => (
<div key={i} className="bg-white rounded-2xl p-4 shadow-sm relative">
<img src={coca} className="h-28 w-full rounded-lg object-cover" />
<h3 className="mt-2 font-medium">{item}</h3>
<div className="flex justify-between items-center mt-1">
<span className="text-gray-500">
{i === 0 ? "$1.99" : i === 1 ? "$3.50" : "$2.00"}
</span>
<button className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center">
<FaPlus />
</button>
</div>
</div>
))}
</div>
</div>
    </div>
  )
}

export default RecommendedDISH