import { useState } from "react";

// import { FaBoxArchive } from "react-icons/fa6";
const MenuItemCnt = ({itm}) => {
    console.log(itm);
    const {icon, title, value, message} = {...itm};
    console.log(icon+" "+title+" "+value);
    // how to set our own default value if value is not present 

    

    return (
        <section className="rounded-xl flex flex-col gap-4 p-6 bg-white">
            <div className="flex justify-between">
                <span className={`rounded p-3 text-2xl ${
                    (title === 'TOTAL' || title === 'Active Orders') ? 'bg-[#eff6ff] text-[#3b82f6]' : 
                    (title === 'ACTIVE' || title === 'Total Sales') ? 'bg-[#f0fdf4] text-[#22c55e]' :
                    (title === 'SOLD OUT' || title === 'Pending') ? 'bg-[#fff7ed] text-[#fa8833]' : 
                    (title === 'Restaurants') ? 'bg-[#e0e7ff] text-[#4d3be6]' : ''} `}>{icon}</span>
                    
                <span className="text-[#adb3bd] font-bold text-sm">{title}</span>
            </div>
            <div>
                <h1 className="text-2xl font-bold">{value}</h1>
                <p className="text-[#adb3bd] font-bold">{message}</p>
            </div>
            
        </section>
    )
}

export default MenuItemCnt;