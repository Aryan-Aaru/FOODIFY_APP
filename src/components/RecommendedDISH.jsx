import React from 'react'
import { FaPlus } from "react-icons/fa6";
import coca from '../assets/coca.avif'
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../apis/CartAPI';
const RecommendedDISH = ({itm, restaurantId}) => {
  const navigate = useNavigate();
  console.log(itm+" This is dish")
  // foodExtra_id
  let food_extras_ids = itm.food_extra.map(
  (extra) => extra.foodExtra_id
);
  let crt_details = {
    "foodId" : itm.food_id,
    "quantity" : 1, 
    "specialInstructions" : "",
    "restaurentId" : restaurantId,
    "addons" : food_extras_ids
  }
  let userid = localStorage.getItem("userId");
  let handleCart = () => {
    addToCart(crt_details, userid)
    .then((res) => {
      
      alert("Success", res.data)
    })
    .catch((err) => {
      alert("Eror", err.message);
    })
  }
  return (
   
    <>
            <div  className="bg-white rounded-2xl gap-4 flex p-4 shadow-sm relative cursor-pointer hover:shadow-2xl" onClick={() => {navigate(`/dish/${restaurantId}/${itm.food_id}`)}}>
              <img src={coca} className="h-full w-[25%] rounded-lg object-cover" onError={(e) => {
                  e.target.onerror = null; // prevent infinite loop if fallback fails
                  e.target.src = coca;      // fallback to default image
                }}/>
              <div className='flex flex-col justify-between  w-full'>
                <div>
                  <h3 className="mt-2 font-bold ">{itm?.food_name}</h3>
                  <p className=' text-gray-500 text-[11px]'>{itm?.food_description}</p>
                </div>
                <div className='flex justify-between w-full '>
                  <span className="font-bold ">
                     {itm?.food_price}
                   </span>
                  <button className="w-8 h-8 rounded-full bg-red-100 hover:bg-[#ea2a33] hover:text-white cursor-pointer text-[#ea2a33] flex items-center justify-center"
                  onClick={
                    (e) => {
                      e.stopPropagation();
                      handleCart()
                      
                    }
                    }
                  >
                     <FaPlus />
                  </button>
                </div>
  

              </div>
              
            </div>
    
        </>
  )
}

export default RecommendedDISH