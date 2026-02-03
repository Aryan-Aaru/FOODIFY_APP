import { useState } from "react";
import OrderManageCard from "../components/Admin/OrderManageCard";
import pizza from '../assets/pizzaSlice.jpg';
const OrderManagement = () => {
    let [tab, setTab] = useState('Active');
    let tabs = ['Active', 'History'];
    let orderCard = [
        {
            picture : pizza,
            restaurentName : 'Quick Bites',
            price : 24.50, 
            orderId : '#ORD-392',
            dishName : 'Sarah Jenkis',
            Extra: ['2x Whopper Meal', '1x Onion Rings', '1x Coke Zero'],
            orderStatus : 'PENDING',
            action:'PENDING'
        },
        {
            picture : pizza,
            restaurentName : 'Quick Bites',
            price : 24.50, 
            orderId : '#ORD-392',
            dishName : 'Sarah Jenkis',
            Extra: ['2x Whopper Meal', '1x Onion Rings', '1x Coke Zero'],
            orderStatus : 'READY',
            action:'Mark Picked Up'
        },
        {
            picture : pizza,
            restaurentName : 'Quick Bites',
            price : 24.50, 
            orderId : '#ORD-392',
            dishName : 'Sarah Jenkis',
            Extra: ['2x Whopper Meal', '1x Onion Rings', '1x Coke Zero'],
            orderStatus : 'Delivared',
            action:'DONE'
        },
        {
            picture : pizza,
            restaurentName : 'Quick Bites',
            price : 24.50, 
            orderId : '#ORD-392',
            dishName : 'Sarah Jenkis',
            Extra: ['2x Whopper Meal', '1x Onion Rings', '1x Coke Zero'],
            orderStatus : 'PREPARING',
            action:'Assign Driver'
        },
        {
            picture : pizza,
            restaurentName : 'Quick Bites',
            price : 24.50, 
            orderId : '#ORD-392',
            dishName : 'Sarah Jenkis',
            Extra: ['2x Whopper Meal', '1x Onion Rings', '1x Coke Zero'],
            orderStatus : 'PENDING',
            action:'PENDING'
        },
        {
            picture : pizza,
            restaurentName : 'Quick Bites',
            price : 24.50, 
            orderId : '#ORD-392',
            dishName : 'Sarah Jenkis',
            Extra: ['2x Whopper Meal', '1x Onion Rings', '1x Coke Zero'],
            orderStatus : 'PENDING',
            action:'PENDING'
        }
    ]
    return (
        <section className="p-8">
            <section className="flex justify-between ">
                <div className="flex p-0.5 bg-white shadow rounded-xl">
                    {
                        tabs.map((items) => {
                            return <li className={`cursor-pointer list-none py-2 px-8 rounded-xl  ${(tab === items) ? 'bg-[#ea2a33] text-white' : 'bg-white text-black'}`} onClick={() => {setTab(items)}}>{items}</li>
                        })
                    }
                </div>
                <div className="flex gap-4">
                    <div>
                        <input type="date" />
                        Date Range
                    </div>
                    <div>
                        Status
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-[repeat(2,1fr)] mt-8 gap-8 ">
                {
                    orderCard.map((item) => {
                        return <OrderManageCard itm = {item} />
                    })
                }
            </section>
            
        </section>
    )
}

export default OrderManagement;