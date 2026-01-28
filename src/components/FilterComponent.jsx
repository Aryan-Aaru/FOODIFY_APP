import { useState } from "react";
import { MdOutlineLocalPizza, MdOutlineBakeryDining, MdOutlineRamenDining, MdGrain } from "react-icons/md";
import { PiHamburgerLight, PiFlowerLotusFill, PiLeafLight, PiOrangeLight } from "react-icons/pi";
import KebabDrinkLogo from "./icons_components/KebabDrinkLogo";
import { LuIceCreamCone } from "react-icons/lu";
import { ImSpoonKnife } from "react-icons/im";

const FilterComponent = () => {

    // Still in progress, Clusines items names, button selection, reset all, apply filter and code optimiztion is pending 

    let [recommended, setRecommended] = useState(false);
    let [toprated, setTopRated] = useState(false);
    let [delivarytime, setDelivaryTime] = useState(false);
    let [mostregular, setMostRegular] = useState(false);
    let [money, setMoney] = useState('');
    let [vegetarian, setVegetarian] = useState(false);
    let [vegan, setVegan] = useState(false);
    let [gluten_Free, setGlutenFree] = useState(false);

    const handleSortBy = (idx) => {
        if(idx === 0){
            setRecommended(!recommended);
        }
        else if(idx === 1){
            setTopRated(!toprated);
        }
        else if(idx === 2){
            setDelivaryTime(!delivarytime);
        }
        else if(idx === 3){
            setMostRegular(!mostregular);
        }
    } 

    const handleAppyColor = (idx) => {
        if(idx === 0){
            return recommended
        }
        else if(idx === 1){
            return toprated;
        }
        else if(idx === 2){
            return delivarytime;
        }
        else if(idx === 3){
            return mostregular;
        }
    }

    let sortby = ['Recommended', 'Top Rated', 'Delivary Time', 'Most Regular'];
    return (
        <>
            <aside className="bg-white p-6 rounded-3xl w-[25%] shadow flex flex-col gap-5">
                <section className="flex justify-between">
                    <div className="font-bold text-xl">Filters</div>
                    <div className="text-[#ea2a33]">Reset All</div>
                </section>
                <section>
                    <div className="font-bold">Sort by</div>
                    <div className="list-none flex flex-wrap gap-3 mt-2">
                        {
                            sortby.map((item, idx) =>{
                                return <li className={`cursor-pointer py-2 px-3 border text-sm rounded-full ${(handleAppyColor(idx)) ? 'bg-[#ea2a33] text-white' : ''}`} onClick={() => {handleSortBy(idx); console.log(idx)}} >{item}</li>
                            })
                        }
                    </div>
                </section>
                <section>
                    <div className="font-bold">Price Range</div>
                    <div className="list-none flex w-full justify-between mt-2 bg-[#f8f9fa] p-2">
                        <li className={`cursor-pointer w-[25%] p-2 rounded text-center ${(money === 'one')? 'bg-white text-[#ea2a33]': ''}`} onClick={()=>{if(money !== 'one'){setMoney('one')}else{setMoney('')}}}>$</li>
                        <li className={`cursor-pointer w-[25%] p-2 rounded text-center ${(money === 'two')? 'bg-white text-[#ea2a33]': ''}`} onClick={()=>{if(money !== 'two'){setMoney('two')}else{setMoney('')}}}>$$</li>
                        <li className={`cursor-pointer w-[25%] p-2 rounded text-center ${(money === 'three')? 'bg-white text-[#ea2a33]': ''}`} onClick={()=>{if(money !== 'three'){setMoney('three')}else{setMoney('')}}}>$$$</li>
                        <li className={`cursor-pointer w-[25%] p-2 rounded text-center ${(money === 'four')? 'bg-white text-[#ea2a33]': ''}`} onClick={()=>{if(money !== 'four'){setMoney('four')}else{setMoney('')}}}>$$$$</li>
                    </div>
                </section>
                {/* <section >
                    <div className="font-bold">Clusines</div>
                    <div className="list-none text-3xl gap-3 flex flex-wrap mt-2">
                        <li className=" p-4 rounded-[45%] bg-[#f8f9fa]"><MdOutlineLocalPizza /></li>
                        <li className=" p-4 rounded-[45%] bg-[#f8f9fa]"><PiHamburgerLight /></li>
                        <li className=" p-4 rounded-[45%] bg-[#f8f9fa]"><MdOutlineRamenDining /></li>
                        <li className=" p-4 rounded-[45%] bg-[#f8f9fa]"><KebabDrinkLogo /></li>
                        <li className=" p-4 rounded-[45%] bg-[#f8f9fa]"><MdOutlineBakeryDining /></li>
                        <li className=" p-4 rounded-[45%] bg-[#f8f9fa]"><LuIceCreamCone /></li>
                        <li className=" p-4 rounded-[45%] bg-[#f8f9fa]"><PiOrangeLight /></li>
                        <li className=" p-4 rounded-[45%] bg-[#f8f9fa]"><ImSpoonKnife /></li>
                    </div>
                </section> */}
                <section className="">
                    <div className="font-bold">Dietary</div>
                    <label htmlFor="" className=""> 
                        <section className="flex justify-between p-2 cursor-pointer" onClick={() => {setVegetarian(!vegetarian)}}>
                            <div className="flex gap-3 items-center">
                                <PiLeafLight className="p-2 font-black bg-[#dcfce7] text-[#3fb76f] text-4xl rounded-full"/>
                                <p className="font-medium ">Vegetarian</p>
                            </div>
                            <div className="flex items-center" >
                                <div className={`flex p-1 items-center w-[45px] h-[65%] ${(vegetarian) ? 'bg-[#ee4444] justify-end': 'bg-[#e5e7eb]'}  rounded-2xl`}> <div className="w-[50%] bg-white h-full rounded-full"></div></div>
                            </div>
                        </section>
                    </label>
                    <label htmlFor="" className=""> 
                        <section className="flex justify-between p-2" onClick={() => {setVegan(!vegan)}}>
                            <div className="flex gap-3 items-center">
                                <PiFlowerLotusFill className="p-2 font-black bg-[#dcfce7] text-[#3fb76f] text-4xl rounded-full"/>
                                <p className="font-medium ">Vegan</p>
                            </div>
                            <div className="flex items-center" >
                                <div className={`flex p-1 items-center w-[45px] h-[65%] ${(vegan) ? 'bg-[#ee4444] justify-end': 'bg-[#e5e7eb]'}  rounded-2xl`}> <div className="w-[50%] bg-white h-full rounded-full"></div></div>
                            </div>
                        </section>
                    </label>
                    <label htmlFor="" className=""> 
                        <section className="flex justify-between p-2" onClick={() => {setGlutenFree(!gluten_Free)}}>
                            <div className="flex gap-3 items-center">
                                <MdGrain className="p-2 font-black bg-[#ffedd5] text-[#ea5312] text-4xl rounded-full"/>
                                <p className="font-medium ">Gluten-Free</p>
                            </div>
                            <div className="flex items-center" >
                                <div className={`flex p-1 items-center w-[45px] h-[65%] ${(gluten_Free) ? 'bg-[#ee4444] justify-end': 'bg-[#e5e7eb]'}  rounded-2xl`}> <div className="w-[50%] bg-white h-full rounded-full"></div></div>
                            </div>
                        </section>
                    </label>
                </section>
                <button className="font-bold text-lg border p-2 rounded-2xl text-white bg-[#ea2a33] cursor-pointer">Apply Filters </button>
            </aside>
        </>
    )
}

export default FilterComponent;