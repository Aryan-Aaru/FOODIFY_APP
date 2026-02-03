import { FaDollarSign } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";
import { AiTwotoneShop } from "react-icons/ai";
import { useState } from "react";
import MenuItemCnt from "../components/Admin/MenuItemCnt";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AdminDasboard = () => {

    const revenueData = [
        { day: "Mon", value: 4200 },
        { day: "Tue", value: 8200 },
        { day: "Wed", value: 4600 },
        { day: "Thu", value: 7800 },
        { day: "Fri", value: 6500 },
        { day: "Sat", value: 3200 },
        { day: "Sun", value: null },
    ];



    let [overallView, setOverallView] = useState([
            {
                icon : <FaDollarSign />, 
                title : "Total Sales",
                value : '12,450', 
                message : "+12% today"
            },
            {
                icon : <MdOutlineShoppingBag />, 
                title : "Active Orders",
                value : 42, 
                message : "+5% vs avg"
            },
            {
                icon : <AiTwotoneShop className="font-black"/>, 
                title : "Restaurants",
                value : 128, 
                message : "+2 new"
            },
            {
                icon : <MdOutlinePending className="font-black"/>, 
                title : "Pending",
                value : 12, 
                message : "Needs review"
            }

        ]);


    return (
        <section className="p-8">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 pb-8">
                {
                    overallView.map((item, index)=> {
                        return <MenuItemCnt key={index} itm = {item}/>
                    })
                }
            </div>

            <section>
                <div className="bg-white rounded-xl p-6 shadow w-full">
                {/* Header */}
                <div className="flex px-10 justify-between items-center mb-4">
                    <div>
                    <h2 className="text-lg font-semibold">Revenue Overview</h2>
                    <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold">$45,200</span>
                        <span className="text-gray-500">Gross income this week</span>
                    </div>
                    </div>

                    <div className="flex items-center gap-3">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                        +8.5%
                    </span>
                    <button className="text-blue-600 font-medium">
                        View Report
                    </button>
                    </div>
                </div>

                {/* Chart */}
                <div className="h-[260px]">
                    <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                        {/* Gradient */}
                        <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2563eb" stopOpacity={0.4} />
                            <stop offset="100%" stopColor="#2563eb" stopOpacity={0.05} />
                        </linearGradient>
                        </defs>

                        <XAxis dataKey="day" axisLine={false} tickLine={false} />
                        <YAxis hide />

                        <Tooltip />

                        <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#2563eb"
                        strokeWidth={3}
                        fill="url(#colorRevenue)"
                        
                        />
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            padding={{ left: 20, right: 20 }}
                        />

                    </AreaChart>
                    </ResponsiveContainer>
                </div>
                </div>
            </section>
        </section>

    )
}

export default AdminDasboard;