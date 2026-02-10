import React, { useEffect, useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
// import {useNavigate } from 'react-router-dom'
import { 
  MapPin, CreditCard, History, Bell, 
  LifeBuoy, Moon, ChevronRight, LogOut, 
  Star, ShieldCheck, PlusCircle, ArrowLeft,
  Search, User, ShoppingBag
} from 'lucide-react';

import UserProfileBar from '../components/UserProfileBar';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../apis/UserApi';



const Profile = () => {
  const [view, setView] = useState('profile'); 
  // const navigate = useNavigate();
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    if(!user){
      return;
    }
    getUser(localStorage.getItem("userId"))
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => {
        alert(err.message);
      })
  },[])
  const SubPageWrapper = ({ title, children }) => (
    <div className="animate-in slide-in-from-right-4 duration-300">
      <button 
        onClick={() => setView('profile')} 
        className="flex items-center gap-2 text-gray-500 hover:text-red-500 mb-6 font-medium transition-colors"
      >
        <ArrowLeft size={18} /> Back to Settings
      </button>
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8">
        <h3 className="text-2xl font-bold mb-8">{title}</h3>
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen static   bg-[#F9FAFC] text-slate-900 border font-sans pb-20">
      {/* <nav className="bg-white border-b border-gray-100 px-6 py-4 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-red-500 p-2 rounded-lg text-white font-bold">FE</div>
          <span className="font-bold text-xl tracking-tight">FoodieExpress</span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-gray-500">
          <button>Home</button>
          <button>Browse</button>
          <button>Orders</button>
        </div>
        <div className="flex items-center gap-4">
          <Bell size={20} className="text-gray-400" />
          <Moon size={20} className="text-gray-400" />
          <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden border border-gray-100">
            <img src="https://i.pravatar.cc/100?u=alex" alt="user" />
          </div>
        </div>

      </nav> */}

      <div className=' absolute left-12 top-8' onClick={() => {navigate(-1)}}>
        <FaArrowLeftLong  className='text-lg cursor-pointer hover:text-red-600'/>
      </div>

      <div className="max-w-6xl mt-10  mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <UserProfileBar usr={user} />

        <div className="lg:col-span-9 space-y-6">
          
          {view === 'profile' && (
            <>
              <section className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8 pb-4 flex justify-between items-center">
                  <h3 className="text-xl font-black">Account</h3>
                  
                </div>
                <div className="px-4 pb-4">
                  <MenuRow onClick={() => setView('address')} icon={<MapPin className="text-red-400" />} title="My Addresses" subtitle="Home, Work, Gym" />
                  <MenuRow onClick={() => setView('payment')} icon={<CreditCard className="text-red-400" />} title="Payment Methods" subtitle="Visa ending in 4242" />
                  <MenuRow onClick={() => setView('history')} icon={<History className="text-red-400" />} title="Order History" subtitle="View your past delicious meals" />
                  <MenuRow onClick={() => setView('address')} icon={<PlusCircle className="text-red-400" />} title="Add My Address" subtitle="Recorder from past meals" isSpecial />
                </div>
              </section>

              <section className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8 pb-4 font-black text-xl">General</div>
                <div className="px-4 pb-4">
                  <div className="flex items-center justify-between p-5 hover:bg-slate-50 rounded-3xl transition-all cursor-pointer group">
                    <div className="flex items-center gap-5">
                      <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-white transition-colors"><Bell className="text-slate-400" size={22} /></div>
                      <div><p className="font-bold">Push Notifications</p><p className="text-xs text-gray-400">Manage your mobile alerts</p></div>
                    </div>
                    <div className="w-12 h-6 bg-slate-200 rounded-full relative p-1 cursor-pointer"><div className="w-4 h-4 bg-white rounded-full shadow-sm ml-auto"></div></div>
                  </div>
                  <MenuRow onClick={() => setView('support')} icon={<LifeBuoy className="text-slate-400" />} title="Help & Support" subtitle="FAQ and customer service" />
                  <MenuRow icon={<Moon className="text-slate-400" />} title="Appearance" subtitle="Switch between Light and Dark mode" />
                </div>
              </section>

              <section className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-black mb-6">Recent Favorites</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FavoriteItem emoji="🍔" name="Burger King" desc="Cheeseburger Meal" />
                  <FavoriteItem emoji="🍕" name="Pizza Hut" desc="Pepperoni Pizza" />
                  <FavoriteItem emoji="🍣" name="Sushi Master" desc="Dragon Roll" />
                </div>
              </section>
            </>
          )}
          {view === 'address' && (
            <SubPageWrapper title="My Addresses">
              <div className="space-y-4">
                <div className="p-6 border-2 border-red-100 bg-red-50/20 rounded-3xl flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <div className="bg-white p-3 rounded-2xl shadow-sm"><MapPin className="text-red-500" /></div>
                    <div><p className="font-bold text-lg">Home</p><p className="text-gray-500">221B Baker Street, London, NW1 6XE</p></div>
                  </div>
                  <div className="text-red-500 font-bold text-xs bg-white px-3 py-1 rounded-full shadow-sm">DEFAULT</div>
                </div>
                <button className="w-full py-6 border-2 border-dashed border-gray-100 rounded-3xl text-gray-400 font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
                  <PlusCircle size={20} /> Add New Address
                </button>
              </div>
            </SubPageWrapper>
          )}

          {view === 'payment' && (
            <SubPageWrapper title="Payment Methods">
              <div className="p-8 bg-gradient-to-br from-slate-800 to-black rounded-[2rem] text-white shadow-xl max-w-sm">
                <div className="flex justify-between mb-12"><CreditCard size={40} /><span className="italic font-bold text-xl">VISA</span></div>
                <div className="text-2xl tracking-[0.25em] mb-8 font-mono">**** **** **** 4242</div>
                <div className="flex justify-between text-xs opacity-60 uppercase font-bold tracking-widest"><span>Alex Johnson</span><span>12/26</span></div>
              </div>
            </SubPageWrapper>
          )}

          {view === 'history' && (
            <SubPageWrapper title="Order History">
              <div className="space-y-4 text-center py-10">
                <ShoppingBag size={48} className="mx-auto text-gray-200 mb-4" />
                <p className="text-gray-400 font-medium">No recent orders to show.</p>
              </div>
            </SubPageWrapper>
          )}

        </div>
      </div>
    </div>
  );
};


const MenuRow = ({ icon, title, subtitle, isSpecial, onClick }) => (
  <div 
    onClick={onClick}
    className="flex items-center justify-between p-5 hover:bg-slate-50 rounded-3xl transition-all cursor-pointer group mb-1"
  >
    <div className="flex items-center gap-5">
      <div className={`p-4 rounded-2xl group-hover:bg-white transition-colors ${isSpecial ? 'bg-red-50' : 'bg-slate-50'}`}>
        {React.cloneElement(icon, { size: 22 })}
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-xs text-gray-400 font-medium">{subtitle}</p>
      </div>
    </div>
    <ChevronRight className="text-slate-300 group-hover:text-red-400 transition-colors" size={20} />
  </div>
);

const FavoriteItem = ({ emoji, name, desc }) => (
  <div className="flex items-center gap-4 p-4 bg-slate-50/50 rounded-3xl border border-gray-50 hover:bg-white hover:shadow-md transition-all cursor-pointer group">
    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
      {emoji}
    </div>
    <div className="min-w-0">
      <p className="font-bold text-sm truncate">{name}</p>
      <p className="text-[10px] text-gray-400 font-bold uppercase truncate">{desc}</p>
      <button className="text-[10px] text-red-500 font-black mt-1 hover:underline">REORDER</button>
    </div>
  </div>
);

export default Profile;