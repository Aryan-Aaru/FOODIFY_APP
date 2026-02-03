import { useState } from "react";
import RestaurentNav from "../components/RestaurentNav";
import { FaCheck } from "react-icons/fa6";
import { act } from "react";
const OrderConfirm = () => {

    let order_status = ['Confirmed', 'Cooking', 'On the way', 'Delivered'];
    let [currentStatus, setCurrentStatus] = useState('On the way');
    let percentage = ((order_status.indexOf(currentStatus))/(order_status.length-1))*100;
    return (
        <section className="bg-[#f3f4f6] min-h-screen">
            <RestaurentNav />
            <div className="p-8 flex flex-col gap-4">
                <div className="">
                    <div>
                        <h1 className="text-2xl font-bold">Order Confirmation</h1>
                        <p className="text-[12px] text-gray-500">Order #44831 Placed on Date Time</p>
                    </div>
                </div>
                <div className="flex gap-8 justify-between">
                    <div className="flex flex-col w-[65%] gap-8 ">
                        <div className="flex flex-col gap-4 bg-white rounded-[10px] border-l-4 shadow border-[#2dc866] p-4 justify-center items-center">
                            <div className=" bg-[#dcfce7] text-2xl p-4 rounded-full">
                                <FaCheck className="text-white bg-[#16a34a] p-1 rounded-full" />
                            </div>
                            <div className="text-2xl font-bold">
                                Order Placed Successfully!
                            </div>
                            <div className="text-sm text-gray-500 text-center">
                                Thank you, Alex We received your order and the restaurent is <br /> preparing it.
                            </div>
                        </div>
                        <div className="bg-white flex rounded-[10px] shadow flex-col gap-4 p-6">
                            <div className="flex items-start justify-between ">
                                <div>
                                    <h1 className="text-2xl font-bold">Arriving in 15-30 min</h1>
                                    <p className="text-gray-500">Est arrival 12:45 PM</p>
                                </div>
                                <div className=" px-2  rounded-full bg-[#fee2e2] text-sm  text-[#c46c6c] font-bold">
                                    On Time
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-full bg-[#e5e7eb] rounded-full h-2">
                                    <div className="bg-[#ef3d3d] h-full rounded-full transition-all duration-500" style={{ width: `${percentage}%` }}>

                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    {
                                        order_status.map((item, index) => {
                                            let active = index <= order_status.indexOf(currentStatus);
                                            console.log(active);
                                            return <li key={index} className={`list-none ${active ? 'text-[#ef3d3d]' : ''}`}>{item}</li>
                                        })
                                    }
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className=" w-[32%] rounded-[10px]  p-6 bg-white">
                        <div>
                            <div className="w-full">
                               <h1 className="text-xl p-2 font-bold">Order Items</h1>
                            </div>
                            <div className=" h-[250px] py-2">

                                <div className="flex justify-between items-center">
                                    <div className="flex items-start gap-2">
                                        <div className="border px-1 font-bold bg-gray-200 text-sm rounded-full">
                                            2x
                                        </div>
                                        <div>
                                            <h1 className="font-bold">Whopper Meal</h1>
                                            <p className="text-sm text-gray-500">Extra Items</p>
                                        </div>
                                    </div>
                                    <div className="font-bold">18.50</div>
                                </div>
                            </div>
                                
                            <div className="py-2">
                                <div className="flex justify-between">
                                    <div>Subtotal</div>
                                    <div>Amount</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>Delivary Fee</div>
                                    <div>Amount</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>Service Fee</div>
                                    <div>Amount</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>Discount</div>
                                    <div>Amount</div>
                                </div>
                            </div>
                            <div className="flex justify-between py-2">
                                <h1 className="font-bold text-xl">Total Paid</h1>
                                <h1 className="font-bold text-2xl">Price</h1>
                            </div>
                        </div>
                        <div className="py-2 text-center border">
                            Cancel Order
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default OrderConfirm;