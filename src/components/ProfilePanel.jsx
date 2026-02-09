import React from 'react';
import { Star, LogOut, Camera } from 'lucide-react';

const ProfilePanel = ({ user, setActiveView, handleLogout }) => (
  <div className="md:col-span-4 lg:col-span-3">
    <div className="bg-white rounded-3xl shadow-sm p-8 sticky top-6">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4 cursor-pointer group" onClick={() => setActiveView('profile')}>
          <img 
            src={user.image} 
            alt={user.name} 
            className="w-full h-full object-cover rounded-full ring-4 ring-red-100"
          />
          <button className="absolute bottom-1 right-1 bg-red-500 text-white p-2.5 rounded-full shadow-md hover:bg-red-600 transition transform group-hover:scale-110">
            <Camera size={16} />
          </button>
        </div>

        {/* User Info */}
        <h1 className="text-2xl font-bold text-gray-900 mb-1">{user.name}</h1>
        <p className="text-sm text-gray-500 mb-6">{user.email}</p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6 w-full mb-6 bg-gray-50 rounded-2xl p-5">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{user.stats.orders}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Orders</div>
          </div>
          <div className="text-center border-x border-gray-200">
            <div className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-1">
              {user.stats.rating}
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{user.stats.saved}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Saved</div>
          </div>
        </div>

        {/* Logout Button */}
        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-semibold py-3.5 px-6 rounded-2xl hover:bg-gray-200 transition-all"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  </div>
);

export default ProfilePanel;