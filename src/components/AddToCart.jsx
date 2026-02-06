import { useState } from "react";
import RadioButton from "./RadioButton";
import { MdShoppingBag } from "react-icons/md";
import { useEffect } from "react";
const AddToCart = ({food, cnt, inc, dec}) => {

    // Pending: Favorate button, apis, item details etc 
    // fetch specific food 
    
    if (!food) return <p>Loading...</p>;
    console.log(food);
    
    let [size, setSize] = useState('Regular');
    let [addOns, setAddOns] = useState(null);
    let [price, setPrice] = useState(food.food_price);
    
    return (
        <>
            {/* <div className="flex flex-col gap-2">
                <h1 className="font-bold text-2xl">{food.food_name}</h1>
                <p className="text-[#808694] text-sm">{food.food_description}</p>
                <h1 className="font-bold text-2xl text-[#ee4444]">{price}</h1>
            </div> */}
            <hr className="text-[#808694]"/>
            <div className="flex flex-col gap-2">
                <label htmlFor="required" className="flex justify-between">
                    <h3 className="font-bold">Choice of Size</h3>
                    <p className="border p-1 bg-[#e1e3e7] rounded-full text-[10px] font-bold text-[#556271]">REQUIRED</p>
                </label>
                <div className="flex flex-col gap-2">
                    <div className={`flex justify-between p-3 shadow rounded-xl ${(size === 'Regular') ? 'border-2 border-[#ee4444] bg-[#fef2f2]' : '' }`} onClick={() => {if(size === 'Large'){ setSize('Regular'); setPrice(price-(2.50*cnt))}}}
                    >
                        <div className="flex gap-2">
                            
                            <RadioButton labelName='required' size={size} value={'Regular'}/>
                            
                            <span className="">Regular</span>
                        </div>
                        <p>Free</p>
                    </div>
                    <div className={`flex justify-between p-3 shadow rounded-xl ${(size === 'Large') ? 'border-2 border-[#ee4444] bg-[#fef2f2]' : '' }`} onClick={() => {if(size === 'Regular'){setSize('Large'); setPrice(price+(2.50*cnt))}}}>
                        <div className="flex gap-2">
                            
                            <RadioButton labelName='required' size={size} value={'Large'}/>

                            <span className="">Large</span>
                        </div>
                        <p>+2.50</p>
                    </div>
                    
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="addons" className="flex justify-between">
                    <h3 className="font-bold">Add-ons</h3>
                    <p className="border p-1 bg-[#e1e3e7] rounded-full text-[10px] font-bold text-[#556271]">Optional</p>
                </label>
                <div className="flex flex-col gap-2">
                    <div className={`flex justify-between p-3 shadow rounded-xl ${(addOns === 'Extra Cheese') ? 'border-2 border-[#ee4444] bg-[#fef2f2]' : '' }`} onClick={() => {(addOns === "Extra Cheese") ? setAddOns(null) : setAddOns('Extra Cheese')}}>
                        <div className="flex gap-2">
                            <RadioButton labelName='addons' size={addOns} value={'Extra Cheese'}/>

                            <span className="">Extra Cheese</span>
                        </div>
                        <p>+1.0</p>
                    </div>
                    <div className={`flex justify-between p-3 shadow rounded-xl ${(addOns === 'Special Sauce') ? 'border-2 border-[#ee4444] bg-[#fef2f2]' : '' }`} onClick={() => {(addOns === "Special Sauce") ? setAddOns(null) : setAddOns('Special Sauce')}}>
                        <div className="flex gap-2">
                            <RadioButton labelName='addons' size={addOns} value={'Special Sauce'}/>

                            <span className="">Special Sauce</span>
                        </div>
                        <p>+2.50</p>
                    </div>
                    <div className={`flex justify-between p-3 shadow rounded-xl ${(addOns === 'Bacon Strip') ? 'border-2 border-[#ee4444] bg-[#fef2f2]' : '' }`} onClick={() => {(addOns === "Bacon Strip") ? setAddOns(null) : setAddOns('Bacon Strip')}}>
                        <div className="flex gap-2">
                            <RadioButton labelName='addons' size={addOns} value={'Bacon Strip'}/>

                            <span className="">Bacon Strip</span>
                        </div>
                        <p>+2.50</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="instructions">
                    <h3 className="font-bold">Special Instructions</h3>
                </label>
                <textarea rows={2} name="instructions" placeholder="e.g. No onions, sauce on side..."  className="outline focus:border-2 focus:outline-none focus:border-[#ee4444]   w-full bg-[#f9fafb] p-3 rounded-xl"/>
            </div>

            <div className="flex flex-col gap-3">
                <hr className="text-[#808694]"/>
                <div className="flex justify-between ">
                    <div className="flex w-[30%] bg-[#f3f4f6] justify-center rounded-xl items-center">
                        <div className=" w-[30%] flex items-center justify-center h-full w-full cursor-pointer text-2xl hover:text-[#ee4444]" onClick={() => {if(cnt > 1){ if(size === 'Large'){setPrice(price-2.50-food.price)} else{setPrice(price-food.price)} } else{ food.price;}dec();}}>-</div>
                        <div className=" w-[30%] flex items-center justify-center h-full w-full">{cnt}</div>
                        <div className=" w-[30%] flex items-center justify-center h-full w-full cursor-pointer text-2xl hover:text-[#ee4444]" onClick={() => {(size === 'Large') ? setPrice(price+food.price+2.50): setPrice(price+food.price); inc();}}>+</div>
                    </div>
                    <button className="flex cursor-pointer w-[65%] justify-between bg-[#ee4444] text-white hover:text-black hover:transition-all items-center rounded-xl py-3 px-6">
                        <div>
                            <p className="text-[10px] font-medium">ADD  TO  CART</p>
                            3.23
                        </div>
                        <div className="rounded-xl p-2 text-xl bg-[#f26969]"><MdShoppingBag /></div>
                    </button>
                </div>
                
            </div>
        </>
    )
}
export default AddToCart;