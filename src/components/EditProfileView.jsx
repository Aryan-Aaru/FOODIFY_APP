import React, { useState } from 'react';
import { ArrowLeft, Check, Camera } from 'lucide-react';
import SectionCard from './SectionCard';

const EditProfileView = ({ user, onSave, onBack }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone || '',
    image: user.image
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4 mb-2">
        <button onClick={onBack} className="p-2 hover:bg-white rounded-full transition">
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>
      </div>

      <SectionCard>
        <form onSubmit={handleSubmit} className="space-y-6 p-2">
          {/* Profile Picture */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-32 h-32 mb-4">
              <img 
                src={formData.image} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full ring-4 ring-red-100"
              />
              <button 
                type="button"
                className="absolute bottom-0 right-0 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition transform hover:scale-105"
              >
                <Camera size={18} />
              </button>
            </div>
            <p className="text-xs text-gray-500">Click to change profile picture</p>
          </div>

          {/* Name */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Full Name</label>
            <input 
              type="text" 
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone Number</label>
            <input 
              type="tel" 
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
              placeholder="+1 (555) 000-0000"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button 
              type="button"
              onClick={onBack}
              className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-1 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition flex justify-center items-center gap-2"
            >
              <Check size={18} /> Save Changes
            </button>
          </div>
        </form>
      </SectionCard>
    </div>
  );
};

export default EditProfileView;
