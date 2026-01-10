
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import RestarentCard from "../components/Admin/RestarentCard";
import pizza from "../assets/pizzaSlice.jpg";
import { FaPlus } from "react-icons/fa";
const AdminRestaurent = () => {
    let [search, setSearch] = useState('');
    let [styles, setStyles] = useState(false);
    let statusType = ['All Status', 'Active', 'Pending', 'Closed'];
    let [status, setStatus] = useState('All Status');
    let restaurent = [
        {
            name : "Burger king", 
            picture : pizza,
            status : "Active",
            popular : 'Fast Food', 
            address : '124 Main st, New York'
        },
        {
            name : "Burger king", 
            picture : pizza,
            status : "Pending",
            popular : 'Fast Food', 
            address : '124 Main st, New York'
        },
        {
            name : "Burger king",
            picture : pizza, 
            status : "Closed",
            popular : 'Fast Food', 
            address : '124 Main st, New York'
        },
        {
            name : "Burger king", 
            picture : pizza,
            status : "Active",
            popular : 'Fast Food', 
            address : '124 Main st, New York'
        },
        {
            name : "Burger king", 
            picture : pizza,
            status : "Closed",
            popular : 'Fast Food', 
            address : '124 Main st, New York'
        }
    ];
    return (
        <section className=" relative p-8 flex flex-col gap-8">
            {/* <h2>Restaurent Page</h2> */}
            <section className="flex justify-between">
                <section className={`flex w-1/3 gap-2 items-center ${(styles === true) ? 'border-2 border-[#ea2a33]':''} text-lg p-2 rounded bg-white shadow-2xs`}>
                    <div className='text-[#ea2a33] text-2xl cursor-pointer hover:bg-[#fdecec] rounded-full p-1' onClick={() => {setStyles(false)}}>
                        <IoIosSearch />
                    </div>
                    <div className={`flex items-center w-full `}>
                        <input className={`w-full focus:outline-none`} type="text" placeholder='Enter restuarent name' value={search} onFocus={() => {setStyles(true)}} onBlur={() => {setStyles(false)}} onChange={(e) => {setSearch(e.target.value)}} />
                        {
                            search &&
                            <RxCross1 className='hover:text-[#ea2a33]' onClick={() => {setStyles(false);setSearch('');
                                
                            }}/>
                        }
                        
                    </div>
                    
                </section>
                <section className="flex p-1 bg-[#e5e7eb] gap-4 rounded-xs">
                    {
                        statusType.map((item) =>{
                            return <li className={`px-3 py-2 rounded-xl list-none hover:text-black ${(status === item) ? 'bg-white text-black':'text-[#8a8f9b]'} cursor-pointer  font-bold`} onClick={() => {setStatus(item)}}>{item}</li>
                        })
                    }
                </section>
            </section>
            <section>
                <h1 className="text-[#8a8f9b] font-bold text-lg">RESULTS</h1>
                <section className="grid p-4 grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6">
                    {
                        restaurent.map((item) => {
                            console.log(item);
                            return <RestarentCard itm = {item}/>
                        })
                    }
                </section>
            </section>

            <div className="fixed right-10 bottom-8 h-15 w-15 flex text-lg justify-center items-center rounded-full bg-[#ee4444] text-white cursor-pointer hover:text-black hover:bg-[#ea2a33]">
                <FaPlus />
            </div>
            
        </section>


    )
}
export default AdminRestaurent;