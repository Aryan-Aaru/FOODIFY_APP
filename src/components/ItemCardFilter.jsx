import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
const ItemCardFilter = ({ foodItems }) =>{
    console.log(foodItems);

    return (
        <>
            <section className="flex shadow flex-col rounded-3xl relative bg-white cursor-pointer">
                <section className="h-[60%] rounded-t-3xl overflow-hidden ">
                    <div className="absolute top-4 right-4 rounded-full p-2 bg-[#5052518d] text-white">
                        <IoMdHeartEmpty />
                    </div>
                    {
                        foodItems.offer && <div className="absolute top-4 left-4 p-1 bg-[#ee4444] text-white">
                            {foodItems.offer}
                        </div>
                    }
                    <img className="h-full w-full" src={foodItems.picture} alt=""/>
                </section>
                <section className="p-6 flex flex-col gap-3">
                    <div className="text-lg font-black overflow-x-hidden">
                        {foodItems.foodName}
                    </div>
                    <div className="text-[#808694]">
                        filter.itel.sfd
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