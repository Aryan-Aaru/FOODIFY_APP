import React from "react";
// import NavBar from "../components/NavBar";
import Items from "../components/Items";
import RecommendedDISH from "../components/RecommendedDISH";
import { useState } from "react";
import CartNav from "../components/CartNav";
import CartRestaurent from "../components/CartRestaurent";
import { getCartRestaurent } from "../apis/CartAPI";
import { useEffect } from "react";
const MyCart = () => {

  let [data, setData] = useState([]);

  

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    getCartRestaurent(userId)
      .then((res) => {
        setData(res.data.content);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);


  return (
    <div className="min-h-screen bg-gray-100">
      <CartNav />

      <div className=" p-12 flex flex-col gap-6">
      
        <div className="w-full ">
          {/* <Items /> */}
          <div className='flex flex-col gap-6'>
            {
              
              data.map((item) => {
                return <CartRestaurent key={item.cart_restaurent_id} itm={item} />
              })
            }
          </div>
          {/* <RecommendedDISH/> */}
        </div>

       
      </div>
    </div>
  );
};

export default MyCart;
