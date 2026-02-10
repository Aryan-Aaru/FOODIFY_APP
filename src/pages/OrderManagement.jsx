import { useState } from "react";
import OrderManageCard from "../components/Admin/OrderManageCard";
import pizza from '../assets/pizzaSlice.jpg';


const OrderManagement = () => {
  const [tab, setTab] = useState("Active");

  const tabs = ["Active", "History"];

  const orders = [
    {
      id: 1,
      picture: pizza,
      restaurentName: "Burger King",
      price: 24.5,
      orderId: "#ORD-392",
      customer: "Sarah Jenkins",
      items: ["2x Whopper Meal", "1x Onion Rings", "1x Coke Zero"],
      status: "PREPARING",
      time: "10m ago",
    },
    {
      id: 2,
      picture: pizza,
      restaurentName: "Starbucks",
      price: 12.9,
      orderId: "#ORD-388",
      customer: "Michael Chen",
      items: ["1x Venti Latte", "1x Croissant"],
      status: "READY",
      time: "22m ago",
    },
    {
      id: 3,
      picture: pizza,
      restaurentName: "Pizza Hut",
      price: 45.0,
      orderId: "#ORD-401",
      customer: "Alex Johnson",
      items: ["2x Large Pepperoni", "1x Garlic Bread"],
      status: "PENDING",
      time: "Just now",
    },
    {
      id: 4,
      picture: pizza,
      restaurentName: "Sweetgreen",
      price: 18.2,
      orderId: "#ORD-355",
      customer: "Emily Davis",
      items: ["1x Harvest Bowl", "1x Green Tea"],
      status: "DELIVERING",
      time: "45m ago",
    },
  ];

  const filteredOrders =
    tab === "Active"
      ? orders.filter(o => o.status !== "DELIVERED")
      : orders.filter(o => o.status === "DELIVERED");

  return (
    <section className="p-8">
      {/* Header */}
      <section className="flex justify-between items-center">
        <div className="flex bg-white shadow rounded-xl p-1">
          {tabs.map(item => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`px-6 py-2 rounded-xl font-semibold ${
                tab === item
                  ? "bg-[#ea2a33] text-white"
                  : "text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <input type="date" className="border rounded px-3 py-1" />
          <select className="border rounded px-3 py-1">
            <option>Status</option>
            <option>PENDING</option>
            <option>PREPARING</option>
            <option>READY</option>
            <option>DELIVERING</option>
          </select>
        </div>
      </section>

      {/* Orders */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {filteredOrders.map(order => (
          <OrderManageCard key={order.id} itm={order} />
        ))}
      </section>
    </section>
  );
};

export default OrderManagement;
