import React from 'react';
import { Search, Bell, Plus, Filter, Calendar, CreditCard, ShoppingBag, CheckCircle, Map } from 'lucide-react';

const AdminDashboard = () => {
  const orders = [
    { id: '#ORD-392', shop: 'Burger King', customer: 'Sarah Jenkins', total: '24.50', status: 'PREPARING', type: 'assign', items: '2x Whopper Meal, 1x Onion Rings' },
    { id: '#ORD-388', shop: 'Starbucks', customer: 'Michael Chen', total: '12.90', status: 'READY', type: 'pickup', items: '1x Venti Latte, 1x Croissant' },
    { id: '#ORD-401', shop: 'Pizza Hut', customer: 'Alex Johnson', total: '45.00', status: 'PENDING', type: 'decision', items: '2x Lrg Pepperoni, 1x Garlic Bread' },
    { id: '#ORD-355', shop: 'Sweetgreen', customer: 'Emily Davis', total: '18.20', status: 'DELIVERING', type: 'map', items: '1x Harvest Bowl' },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8F9FB]">
      {/* Sidebar - Omitted for brevity, using header content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-20 bg-white border-b px-8 flex items-center justify-between sticky top-0 z-40">
          <h2 className="text-xl font-black">Order Management</h2>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" placeholder="Search orders..." className="bg-gray-50 border-none rounded-xl pl-10 pr-4 py-2 w-64 text-sm focus:ring-1 focus:ring-gray-200" />
            </div>
            <Bell size={20} className="text-gray-400" />
            <div className="w-10 h-10 rounded-full bg-orange-100 border-2 border-white shadow-sm overflow-hidden">
               <img src="https://i.pravatar.cc/100?u=restaurant" alt="profile" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="bg-gray-100 p-1 rounded-xl flex">
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-md">Active (14)</button>
              <button className="px-6 py-2 text-gray-500 text-sm font-bold">History</button>
            </div>
            <div className="flex gap-3">
              <FilterBtn icon={<Calendar size={16}/>} label="Date Range" />
              <FilterBtn icon={<Filter size={16}/>} label="Status" />
              <FilterBtn icon={<Plus size={16}/>} label="" primary />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map((o) => (
              <div key={o.id} className="bg-white rounded-[2rem] border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between mb-4">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center font-bold text-gray-400 border border-gray-100 uppercase">{o.shop.substring(0, 2)}</div>
                    <div>
                      <h4 className="font-bold">{o.shop}</h4>
                      <p className="text-[10px] text-gray-400 font-medium">{o.id} • {o.customer}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-lg">${o.total}</p>
                    <p className="text-[10px] text-gray-400 font-medium">10m ago</p>
                  </div>
                </div>

                <div className="flex gap-2 mb-6 flex-wrap">
                  {o.items.split(',').map((it, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-50 text-gray-400 text-[10px] font-bold rounded-lg border border-gray-100">{it.trim()}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full ${o.status === 'PREPARING' ? 'bg-orange-50 text-orange-400' : o.status === 'READY' ? 'bg-blue-50 text-blue-500' : o.status === 'PENDING' ? 'bg-gray-100 text-gray-400' : 'bg-green-50 text-green-500'}`}>
                    {o.status}
                  </span>

                  {o.type === 'assign' && <button className="bg-[#FF4B3A] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2"><ShoppingBag size={14}/> Assign Driver</button>}
                  {o.type === 'pickup' && <button className="border border-gray-100 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-gray-50"><CheckCircle size={14}/> Mark Picked Up</button>}
                  {o.type === 'decision' && (
                    <div className="flex gap-2">
                      <button className="text-gray-400 text-xs font-bold px-3 py-2">Reject</button>
                      <button className="bg-[#FF4B3A] text-white px-6 py-2 rounded-xl text-xs font-bold">Accept</button>
                    </div>
                  )}
                  {o.type === 'map' && <button className="text-red-500 text-xs font-bold flex items-center gap-1 hover:underline">View Map →</button>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterBtn = ({ icon, label, primary }) => (
  <button className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold border ${primary ? 'bg-red-500 border-red-500 text-white' : 'bg-white border-gray-100 text-slate-700 hover:bg-gray-50'}`}>
    {icon} {label}
  </button>
);

export default AdminDashboard;