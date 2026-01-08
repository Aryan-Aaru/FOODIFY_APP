import { useState } from "react";
import MenuItemCnt from "./MenuItemCnt";
import { FaBoxArchive } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { BsBan } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import MenuItemCard from "./MenuItemCard";
import pizza from "../../assets/pizzaSlice.jpg";
const MenuPage = () => {

    let [overallView, setOverallView] = useState([
        {
            icon : <FaBoxArchive />, 
            title : "TOTAL",
            value : 45, 
            message : "Items in Menu"
        },
        {
            icon : <FaCheckCircle />, 
            title : "ACTIVE",
            value : 42, 
            message : "Items in Menu"
        },
        {
            icon : <BsBan className="font-black"/>, 
            title : "SOLD OUT",
            value : 3, 
            message : "Items in Menu"
        }
    ]);

    let dishes = [
        {
            picture: {pizza}, 
            popular: false, 
            title: "Burgur", 
            message: "Two items and burger special", 
            available: true,
            price: 123
        },
        {
            picture: {pizza}, 
            popular: true, 
            title: "Burgur", 
            message: "Two items and burger special", 
            available: true,
            price: 123
        },
        {
            picture: {pizza}, 
            popular: false, 
            title: "Burgur", 
            message: "Two items and burger special", 
            available: true,
            price: 123
        },
        {
            picture: {pizza}, 
            popular: true, 
            title: "Burgur", 
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorum minus fuga consequuntur ullam corporis voluptatibus quam dolorem blanditiis impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia modi ex blanditiis nostrum incidunt eius nesciunt nihil velit commodi reprehenderit, atque dolorum ratione quae similique a harum quos iusto ad magnam nisi? Necessitatibus, iste recusandae. Iusto voluptatum pariatur, tempore sequi deleniti enim a perferendis!", 
            available: true,
            price: 123
        },
        {
            picture: {pizza}, 
            popular: false, 
            title: "Burgur", 
            message: "Two items and burger special", 
            available: true,
            price: 123
        }
    ]

    let items = ['All Items', 'Starters', 'Mains', 'Desserts'];
    let [search, setSearch] = useState('');
    let [defaultItem, setDefaultItem] = useState('All Items');
    let [styleSearch, setStyle] = useState(false);
    return (
        <section className="relative p-8">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 pb-8">
                {
                    overallView.map((item, index)=> {
                        return <MenuItemCnt key={index} itm = {item}/>
                    })
                }
            </div>
            
            <div className="flex items-center justify-between">
                <div className="flex p-1 gap-4">
                    {
                        items.map((item) => {
                            return <li className={`list-none py-2 px-4 cursor-pointer rounded-full font-bold  text-lg ${(defaultItem === item) ? 'bg-[#ea2a33] text-white' : 'hover:bg-[#fdecec] bg-white shadow text-[#ea2a33]'}`} onClick={() => {setDefaultItem(item)}}>{item}</li>
                        })
                    }
                </div>
                <div className={`bg-white shadow  flex items-center ${(styleSearch) ? 'border-2 border-[#ee4444]' : ''} py-2 px-3 rounded text-lg`}>
                    <IoIosSearch className="text-2xl flex w-[50px] cursor-pointer hover:text-[#ee4444] hover:bg-[#fdecec] hover:rounded-full" onClick={() => {console.log(search)}}/>
                    
                    <input type="text" className={`outline-none w-[400px]`} value={search} onFocus={() => setStyle(true)}
    onBlur={() => setStyle(false)} onChange={(e) => {setSearch(e.target.value); console.log(search)}} placeholder="Search menu items..."/>
                    
                    {
                        
                        search && 
                        <RxCross1 className='hover:text-[#ea2a33]' onClick={() => {setSearch('');console.log('Clear the item')}}/>
                    }
                </div>
            </div>

            <div className='pt-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 w-full'>
                {
                    dishes.map((items, index) => {
                        return <MenuItemCard itm = {items} key={index}/>
                    })
                }
            </div>
                
            
            <div className="fixed right-10 bottom-8 h-15 w-15 flex text-lg justify-center items-center rounded-full bg-[#ee4444] text-white cursor-pointer hover:text-black hover:bg-[#ea2a33]">
                <FaPlus />
            </div>
        </section>
    )
}
export default MenuPage;