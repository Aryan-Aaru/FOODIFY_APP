import React from 'react'
import { FaPlus } from "react-icons/fa6";
import coca from '../assets/coca.avif'
const RecommendedDISH = ({itm}) => {
  console.log(itm+" This is dish")
  return (
   
    <>
           
            <div  className="bg-white rounded-2xl gap-4 flex p-4 shadow-sm relative">
              <img src={coca} className="h-full w-[25%] rounded-lg object-cover" />
              <div className='flex flex-col justify-between  w-full'>
                <div>
                  <h3 className="mt-2 font-bold ">{itm.name}</h3>
                  <p className=' text-gray-500 text-[11px]'>{itm.description}</p>
                </div>
                <div className='flex justify-between w-full '>
                  <span className="font-bold ">
                     {itm.price}
                   </span>
                  <button className="w-8 h-8 rounded-full bg-red-100 hover:bg-[#ea2a33] hover:text-white cursor-pointer text-[#ea2a33] flex items-center justify-center">
                     <FaPlus />
                  </button>
                </div>
  

              </div>
              
            </div>
    
        </>
  )
}

export default RecommendedDISH