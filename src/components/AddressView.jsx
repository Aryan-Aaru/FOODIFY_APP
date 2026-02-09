import React, { useState } from 'react';
import { MapPin, ArrowLeft, Plus, Trash2, Edit2, Check } from 'lucide-react';
import SectionCard from './SectionCard';

const AddressView = ({ onBack }) => {
  const [addresses, setAddresses] = useState([
    { id: 1, type: 'Home', text: '1234 Elm Street, Springfield, IL 62704', isDefault: true },
    { id: 2, type: 'Work', text: '5678 Oak Avenue, Suite 200, Chicago, IL 60601', isDefault: false },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null); // null means adding new

  const handleEdit = (addr) => {
    setCurrentAddress(addr);
    setIsEditing(true);
  };

  const handleAddNew = () => {
    setCurrentAddress({ id: Date.now(), type: '', text: '', isDefault: false });
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (confirm('Delete this address?')) {
      setAddresses(addresses.filter(a => a.id !== id));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!currentAddress.type || !currentAddress.text) return;

    if (addresses.find(a => a.id === currentAddress.id)) {
      // Update existing
      setAddresses(addresses.map(a => a.id === currentAddress.id ? currentAddress : a));
    } else {
      // Add new
      setAddresses([...addresses, currentAddress]);
    }
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <SectionCard 
        title={addresses.find(a => a.id === currentAddress.id) ? "Edit Address" : "Add New Address"}
        action={<button onClick={() => setIsEditing(false)} className="text-sm text-gray-500 hover:text-gray-700">Cancel</button>}
      >
        <form onSubmit={handleSave} className="space-y-4 p-2">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Label (e.g. Home)</label>
            <input 
              type="text" 
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
              value={currentAddress.type}
              onChange={e => setCurrentAddress({...currentAddress, type: e.target.value})}
              placeholder="Home, Work, Mom's House..."
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Full Address</label>
            <textarea 
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
              rows="3"
              value={currentAddress.text}
              onChange={e => setCurrentAddress({...currentAddress, text: e.target.value})}
              placeholder="123 Main St, City, State, Zip"
            />
          </div>
          <div className="flex items-center gap-2 pt-2">
            <input 
              type="checkbox" 
              id="defaultAddr"
              checked={currentAddress.isDefault}
              onChange={e => setCurrentAddress({...currentAddress, isDefault: e.target.checked})}
              className="rounded text-red-500 focus:ring-red-500"
            />
            <label htmlFor="defaultAddr" className="text-sm text-gray-600">Set as default address</label>
          </div>
          <button type="submit" className="w-full py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition flex justify-center items-center gap-2">
            <Check size={18} /> Save Address
          </button>
        </form>
      </SectionCard>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-2">
        <button onClick={onBack} className="p-2 hover:bg-white rounded-full transition">
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">My Addresses</h2>
      </div>

      <div className="space-y-4">
        {addresses.map((addr) => (
          <div key={addr.id} className="bg-white p-5 rounded-3xl shadow-sm border border-transparent hover:border-red-100 transition group relative">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className={`p-2.5 rounded-full bg-red-50 text-red-500 h-fit`}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    {addr.type}
                    {addr.isDefault && <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide">Default</span>}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 max-w-md">{addr.text}</p>
                </div>
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => handleEdit(addr)} className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-full transition">
                  <Edit2 size={16} />
                </button>
                <button onClick={() => handleDelete(addr.id)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={handleAddNew}
        className="w-full py-4 bg-red-500 text-white rounded-2xl font-bold hover:bg-red-600 transition flex justify-center items-center gap-2 shadow-md shadow-red-500/20"
      >
        <Plus size={20} /> Add New Address
      </button>
    </div>
  );
};

export default AddressView;
