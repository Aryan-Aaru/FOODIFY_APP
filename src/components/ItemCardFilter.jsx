import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import pizza from '../assets/burgur.jpg';

import { useNavigate } from "react-router-dom";
const ItemCardFilter = ({ foodItems }) =>{
    console.log(foodItems);
    
    const navigate = useNavigate();
    return (
        <>
            <section className="flex shadow flex-col rounded-3xl relative bg-white cursor-pointer max-w-[300px] w-full" 
            onClick={() => {navigate(`/dish/${foodItems.restaurant_id}/${foodItems.food_id}`)}}>
                <section className="h-[60%] rounded-t-3xl overflow-hidden ">
                    <div className="absolute top-4 right-4 rounded-full p-2 bg-[#5052518d] text-white">
                        <IoMdHeartEmpty />
                    </div>
                    {
                        foodItems.offer && <div className="absolute top-4 left-4 p-1 bg-[#ee4444] text-white">
                            {foodItems.offer}
                        </div>
                    }
                    <img className="h-full w-full" src={pizza} alt=""/>
                </section>
                <section className="p-6 flex flex-col gap-3">
                    <div className="text-lg font-black overflow-x-hidden">
                        {foodItems.food_name}
                    </div>
                    <div className="text-[#808694]">
                        {foodItems.food_description}
                    </div>
                    <hr className="text-[#808694]"/>
                    <div className="flex justify-between text-[#808694]">
                        <div>{foodItems.timeTaken}</div>
                        <div>{foodItems.delivarycharges}</div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default ItemCardFilter;