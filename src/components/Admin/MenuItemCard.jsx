import { useState } from "react";
import RadioButton from "../RadioButton";
import { HiPencil } from "react-icons/hi2";

const MenuItemCard = ({itm}) => {
    let [Available, setAvailable] = useState(itm.available);
    return (
        <>
            <section className="flex shadow flex-col h-[490px] rounded-3xl relative bg-white cursor-pointer">
                <section className="min-h-[60%] relative rounded-t-3xl overflow-hidden ">
                    {/* <div className="absolute top-4 right-4 rounded-full p-2 bg-[#5052518d] text-white">
                        <IoMdHeartEmpty />
                    </div> */}
                    {
                        itm.popular && <div className="absolute top-4 left-4 p-2 rounded-full bg-[#ee4444] text-white">
                            Popular
                        </div>
                    }
                    {console.log(Available+" Available")}
                    <img className="h-full w-full" src={itm.picture.pizza} alt=""/>
                    {
                        !Available && 
                        <div className=" flex absolute top-0 left-0 h-full w-full justify-center items-center bg-[#7e8189a0]"> 
                            <div className="p-3 border-4 rounded border-white font-bold text-white">SOLD OUT</div>
                        </div>
                    }
                </section>
                <section className="p-6 flex flex-col gap-3">
                    <div className="flex justify-between">
                        <div className="text-2xl font-black overflow-hidden text-overflow-ellipsis">
                            {itm.title}
                        </div >
                        <div className="text-2xl font-black overflow-x-hidden text-[#22c55e]">
                            {itm.price}
                        </div>
                    </div>
                    
                    <div className="text-[#808694] h-[48px] overflow-hidden">
                        {itm.message}
                    </div>
                    <hr className="text-[#808694]"/>
                    <div className="flex items-center justify-between h-[38px] text-[#808694]">
                        <div className="flex items-center gap-2 h-full" onClick={() => {setAvailable(!Available)}}>
                            <div className="flex h-full items-center" >
                                <div className={`flex p-1 items-center w-[45px] h-[65%] ${(Available) ? 'bg-[#ee4444] justify-end': 'bg-[#e5e7eb]'}  rounded-2xl`}> <div className="w-[50%] bg-white h-full rounded-full"></div></div>
                            </div>
                            <p>Available</p>
                        </div>
                        <HiPencil />
                    </div>
                </section>
            </section>
        </>
    )
}

export default MenuItemCard;