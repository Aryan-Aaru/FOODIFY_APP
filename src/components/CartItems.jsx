import React, { useEffect } from 'react'
import burger from "../assets/burger.avif";
import vegBurger from "../assets/vegBurger.avif";
import { GoPlus } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import Items from './Items';
import CartNav from './CartNav';
import PaymentSummary from './PaymentSummary';
import { useLocation, useParams } from 'react-router-dom';
import { getCartItems } from '../apis/CartAPI';
import { useState } from 'react';
import { deleteCartItems } from '../apis/CartAPI';
const CartItems = () => {
  let {restaurentid} = useParams();
  let [data, setData] = useState([]);
  const location = useLocation();
  const cartRestaurant = location.state?.itm;
  console.log(cartRestaurant);

  useEffect(() =>{
    if (!restaurentid) return;
    getCartItems(localStorage.getItem("userId"), restaurentid)
    .then((res) => {
      setData(res.data.content);
      // alert("success");
      return ;
    })
    .catch((err) =>{
      alert(err.message);
    })
  }, [restaurentid])
  
  const handleDelete = async (cartItemId) => {
    try {
      await deleteCartItems(
        localStorage.getItem("userId"),
        cartRestaurant.cart.cart_id,
        cartItemId
      );

      // remove item from UI after delete
      setData((prev) =>
        prev.filter((item) => item.cart_item_id !== cartItemId)
      );
    } catch (err) {
      alert(err.message || "Failed to delete item");
    }
  };
  // console.log(data);
  return (
     <div className="min-h-screen bg-gray-100">
      <CartNav />

      <div className="grid grid-cols-1 p-8 lg:grid-cols-3 gap-8">
      
        <div className="lg:col-span-2  space-y-6">
          <div className='flex flex-col gap-6'>
          {
            data.map((item) => {
              return  <Items key={item.cart_item_id} itm={item} onDelete={handleDelete} />
            })
          }
          {/* <Items /> */}
         
          {/* <RecommendedDISH/> */}
        </div>
        </div>

        <PaymentSummary details={cartRestaurant}/>
      </div>
    </div>
  )
}

export default CartItems;