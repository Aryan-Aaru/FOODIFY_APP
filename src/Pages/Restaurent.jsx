import RestaurentNav from "../components/RestaurentNav";
import Image from "../assets/hq720.jpg";
import { FaRegHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { useState } from "react";
import RestaurentItems from "../components/RestaurentItems";
import { useNavigate } from "react-router-dom";
const Restaurent = () => {

    let obj = ['Popular Items', 'Veg Items', 'Non-veg Items', 'Gluten-Free Items']

    let [selected, setSelected] = useState('Popular Items');
    const navigate = useNavigate();
    

    return (
        <section className="bg-[#f3f4f6] min-h-screen">
            <RestaurentNav/>
            <section className=" p-6 flex w-full flex-col gap-4">
                <div className="h-[30vh] border-red-400 relative  rounded-xl overflow-hidden">
                    <img src={Image} alt="" className="h-full w-full" />
                    <div className="absolute bg-[#3a38384c] top-0 left-0 border w-full h-full flex justify-between">
                        <div className="h-full p-6  flex items-end">
                            <div className=" flex flex-col gap-1 border-white">
                                <h1 className="text-3xl font-bold text-white">Bella Itailia Trattoria</h1>
                                <p className="text-white text-sm">Authentic Itailia</p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="text-sm px-2 py-1 bg-[#aeaaa444] text-white  rounded-full">Excellent (500+)</span>
                                    <span className="text-sm px-2 py-1 bg-[#aeaaa444] text-white  rounded-full">20-30 mins</span>
                                    <span className="text-sm px-2 py-1 bg-[#aeaaa444] text-white  rounded-full">delivary</span>
                                </div>
                            </div>
                        </div>
                        <div className=" border-white flex flex-col justify-between  p-4 ">
                            <div className="flex gap-4 items-center">
                                <div className="border rounded-full p-2 cursor-pointer hover:text-[#ea2a33] hover:bg-[#fdecec] bg-white"><FaRegHeart /></div>
                                <div className="border p-2 rounded-full cursor-pointer hover:text-[#ea2a33] hover:bg-[#fdecec] bg-white"><IoMdShare /></div>
                            </div>
                            <div className="p-2 rounded-[10px] text-sm font-bold bg-[#ea2a33] text-white">
                                More Info
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 pt-2">
                    <div className="w-[20vw] ">
                        <h1 className="font-bold text-xl mb-2">Menu</h1>
                        <div className="flex flex-col gap-2">
                            {
                                obj.map((item, index) => {
                                    return <li key={index} className={` cursor-pointer ${(selected === item) ? 'text-white bg-[#ea2a33]' : 'text-[#8a909c] shadow hover:text-[#ea2a33] hover:bg-[#fdecec]'} rounded-xl px-4 py-2 font-bold list-none`} onClick={() => {
                                        setSelected(item)
                                    }}>{item}</li>
                                })
                            }
                        </div>
                        
                    </div>
                    <div className="w-full ">

                        <RestaurentItems itemName={selected} />
                    </div>
                </div>

          
            </section>
        </section>
    )
}
export default Restaurent;