import FoodifyLogo from '../assets/FinalFoodify.png';
import { IoIosSearch, IoMdBasket } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaRegMoon, FaUser } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const RestaurentNav = () => {
    
    let [theme, setTheme] = useState(false);
    let [search, setSearch] = useState('')
  const navigate = useNavigate();
    return ( 
    <section className={` flex ${(theme) ? "bg-black": "bg-white"} justify-between px-10 py-3 items-center `}>
        <section className='h-full cursor-pointer' onClick={() => console.log("move to home page")}>
            <img className='h-10' src={FoodifyLogo} alt="fodify_Logo" title='foodifyLogo'/>
        </section>
        <section className='flex w-1/2 gap-2 items-center text-lg p-2 rounded-2xl bg-[#f8f9fa] shadow'>
            <div className='text-[#ea2a33] text-2xl cursor-pointer hover:bg-[#fdecec] rounded-full p-1' onClick={() => {console.log(`Search ${search} item`)}}>
                <IoIosSearch />
            </div>
            <div className='flex items-center w-full'>
                <input className='w-full focus:outline-none' type="text" value={search} placeholder='Enter food name or restuarent name' onChange={(e) => {setSearch(e.target.value)}} />
                {
                    search &&
                    <RxCross1 className='hover:text-[#ea2a33]' onClick={() => {setSearch('');console.log('Clear the item')}}/>
                }
                
            </div>
            
        </section>
        <section className="flex list-none gap-7 text-lg w-[20%] items-center justify-end">
            <li className={`cursor-pointer rounded-full hover:bg-[#fdecec] hover:text-[#ea2a33] ${(theme) ? 'text-white' : 'text-black'} h-full p-2`} onClick={() => {setTheme(!theme);console.log("change the theme")}}><FaRegMoon /></li>
            <li className={`cursor-pointer h-full text-lg rounded-full hover:bg-[#fdecec] ${(theme) ? 'text-white' : 'text-black'} hover:text-[#ea2a33] p-2 `}        
            onClick={() => navigate("/cart")}>  <IoMdBasket /></li>

            <li className={`cursor-pointer h-full flex gap-2 px-2 py-1 rounded-full  hover:bg-[#fdecec] hover:text-[#ea2a33] items-center ${(theme) ? 'text-white' : 'text-black'}`} ><FaUser /><p>Profile</p></li>
        </section>
    </section>
    )
}
export default RestaurentNav;