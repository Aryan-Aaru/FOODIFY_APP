import React from 'react';
import { ArrowLeft, MapPin, CreditCard, Clock, ChevronRight, Edit3, ShoppingBag } from 'lucide-react';

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFC] font-sans text-slate-900 pb-10">
      {/* Header */}
      <nav className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <ArrowLeft className="cursor-pointer hover:text-red-500" />
          <h1 className="text-xl font-bold">Checkout</h1>
        </div>
        <div className="flex gap-8 text-sm font-medium text-gray-500 items-center">
          <span className="hover:text-black cursor-pointer">Home</span>
          <span className="hover:text-black cursor-pointer">Browse</span>
          <span className="hover:text-black cursor-pointer">Orders</span>
          <div className="flex items-center gap-1 text-red-500 bg-red-50 px-3 py-1.5 rounded-full relative">
            <ShoppingBag size={18} />
            <span className="font-bold">Cart</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">2</span>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Details */}
        <div className="lg:col-span-8 space-y-6">
          {/* Banner */}
          <div className="relative h-48 rounded-[2rem] overflow-hidden bg-gradient-to-r from-emerald-100 to-teal-50 border border-emerald-50">
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl flex items-center gap-2 shadow-sm border border-white">
              <Clock size={16} className="text-emerald-500" />
              <span className="text-xs font-bold text-slate-700">25–35 min</span>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Delivery Address</h3>
              <button className="text-red-500 text-sm font-bold hover:underline">Change</button>
            </div>
            <div className="flex gap-4">
              <div className="p-3 bg-red-50 rounded-2xl h-fit">
                <MapPin className="text-red-500" size={24} />
              </div>
              <div>
                <p className="font-bold">Home</p>
                <p className="text-sm text-gray-500 mt-1">123 Main Street, Apt 4B, New York, NY 10001</p>
                <p className="text-xs text-gray-400 mt-2 font-medium italic">Note to driver: Gate code is 1234</p>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Payment Method</h3>
              <span className="text-[10px] font-bold text-gray-300 flex items-center gap-1 uppercase tracking-widest">
                 Secure
              </span>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-2 border border-gray-100 rounded-lg">
                   <CreditCard className="text-slate-400" />
                </div>
                <div>
                  <p className="font-bold text-sm">Visa ending in 4242</p>
                  <p className="text-[10px] text-gray-400 font-medium">Expires 12/25</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-300" />
            </div>
          </div>

          {/* Special Instructions */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-4">Special Instructions</h3>
            <div className="relative">
              <textarea 
                placeholder="e.g. Leave at door, ring doorbell..." 
                className="w-full h-32 bg-gray-50 border-gray-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-red-100 outline-none transition-all resize-none"
              ></textarea>
              <Edit3 className="absolute bottom-4 right-4 text-gray-300" size={18} />
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 sticky top-24">
            <h3 className="font-bold text-xl mb-8">Order Summary</h3>
            
            <div className="space-y-6 mb-8">
              <SummaryItem img="🍔" name="Spicy Chicken Burger" price="24.00" sub="2x Extra cheese, No onions" />
              <SummaryItem img="🍟" name="Large Fries" price="4.50" sub="1x Standard Salt" />
            </div>

            <div className="flex gap-2 mb-8">
              <input type="text" placeholder="Promo Code" className="flex-1 bg-gray-50 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-gray-200" />
              <button className="bg-gray-100 text-gray-600 px-6 py-2 rounded-xl text-sm font-bold hover:bg-gray-200">Apply</button>
            </div>

            <div className="space-y-3 border-b border-gray-50 pb-6 mb-6">
              <FeeRow label="Subtotal" value="28.50" />
              <FeeRow label="Delivery Fee" value="2.99" />
              <FeeRow label="Service Fee" value="1.50" />
            </div>

            <div className="flex justify-between items-end mb-8">
              <span className="text-xl font-black">Total</span>
              <span className="text-2xl font-black text-red-500">$32.99</span>
            </div>

            <button className="w-full bg-[#FF4B3A] text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-red-100 flex justify-between px-8 items-center hover:bg-red-600 transition-all active:scale-[0.98]">
              <span>Place Order</span>
              <span>$32.99</span>
            </button>
            
            <p className="text-[10px] text-gray-400 text-center mt-6">
              By placing your order, you agree to our <span className="underline cursor-pointer">Terms of Service</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Internal Components
const SummaryItem = ({ img, name, price, sub }) => (
  <div className="flex gap-4">
    <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-3xl shadow-lg">{img}</div>
    <div className="flex-1">
      <div className="flex justify-between">
        <p className="font-bold text-sm">{name}</p>
        <p className="font-bold text-sm">${price}</p>
      </div>
      <p className="text-[10px] text-gray-400 mt-1 font-medium bg-red-50 w-fit px-2 py-0.5 rounded-md text-red-400">
        {sub}
      </p>
    </div>
  </div>
);

const FeeRow = ({ label, value }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-400 font-medium">{label}</span>
    <span className="font-bold">${value}</span>
  </div>
);

export default CheckoutPage;