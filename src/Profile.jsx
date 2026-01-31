import React, { useState } from 'react';
import { 
  MapPin, 
  CreditCard, 
  History, 
  Bell, 
  HelpCircle, 
  Moon, 
  ChevronRight, 
  LogOut, 
  Camera,
  Star,
  Facebook,
  Twitter,
  ArrowLeft,
  Plus,
  Trash2,
  Edit2,
  Check,
  X
} from 'lucide-react';

// --- Reusable Components ---

const ToggleSwitch = ({ enabled, onChange }) => (
  <button
    onClick={(e) => { e.stopPropagation(); onChange(); }}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
      enabled ? 'bg-red-500' : 'bg-gray-200'
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        enabled ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);

const ListItem = ({ icon: Icon, title, subtitle, rightElement, onClick, isRedIcon = true }) => (
  <div 
    onClick={onClick}
    className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-50 last:border-0"
  >
    <div className="flex items-center gap-4">
      <div className={`p-2.5 rounded-full ${isRedIcon ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-600'}`}>
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      </div>
    </div>
    <div className="text-gray-400">
      {rightElement || <ChevronRight size={20} />}
    </div>
  </div>
);

const SectionCard = ({ title, action, children, className = "" }) => (
  <div className={`bg-white rounded-3xl p-6 shadow-sm mb-6 ${className}`}>
    {(title || action) && (
      <div className="flex justify-between items-center mb-4 px-2">
        {title && <h2 className="text-lg font-bold text-gray-800">{title}</h2>}
        {action}
      </div>
    )}
    <div className="flex flex-col">
      {children}
    </div>
  </div>
);

// --- Sub-Views ---

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

      <button onClick={handleAddNew} className="w-full py-4 border-2 border-dashed border-gray-300 rounded-3xl text-gray-400 font-semibold hover:border-red-400 hover:text-red-500 hover:bg-red-50/50 transition flex items-center justify-center gap-2">
        <Plus size={20} /> Add New Address
      </button>
    </div>
  );
};

const EditProfileView = ({ user, onSave, onBack }) => {
  const [formData, setFormData] = useState(user);

  return (
    <SectionCard 
      title="Edit Profile" 
      action={<button onClick={onBack} className="text-sm text-gray-500">Cancel</button>}
    >
      <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }} className="space-y-4 p-2">
        <div className="flex justify-center mb-6">
           <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm relative group cursor-pointer">
              <img src={user.image} alt="Profile" className="w-full h-full object-cover opacity-90 group-hover:opacity-75 transition" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Camera className="text-white drop-shadow-md" />
              </div>
           </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Full Name</label>
          <input 
            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone Number</label>
          <input 
            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <button type="submit" className="w-full py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition">
          Save Changes
        </button>
      </form>
    </SectionCard>
  );
};
const ProfilePanel = ({ user,setActiveView,handleLogout }) => {
  return (
<div className="md:col-span-4 lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center text-center relative overflow-hidden sticky top-6">
              
              {/* Profile Image Area */}
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                </div>
                <button 
                  onClick={() => setActiveView('profile')}
                  className="absolute bottom-0 right-0 bg-red-500 text-white p-1.5 rounded-full shadow-md hover:bg-red-600 transition"
                >
                  <Camera size={14} />
                </button>
              </div>

              {/* Name & Info */}
              <h1 className="text-xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-sm text-gray-500 mb-3">{user.phone}</p>

              {/* Gold Member Badge */}
              <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 mb-8">
                <Star size={12} fill="currentColor" />
                GOLD MEMBER
              </div>

              {/* Stats Row */}
              <div className="flex w-full justify-between px-2 mb-8 border-t border-b border-gray-50 py-6">
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold text-gray-900">{user.stats.orders}</span>
                  <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">Orders</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold text-gray-900 flex items-center gap-1">
                    {user.stats.rating} <Star size={12} className="text-yellow-400 fill-yellow-400" />
                  </span>
                  <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">Rating</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold text-gray-900">${user.stats.saved}</span>
                  <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">Saved</span>
                </div>
              </div>

              {/* Logout Button */}
              <button 
                onClick={handleLogout}
                className="w-full py-3 px-4 rounded-xl border border-red-100 bg-red-50 text-red-500 font-semibold hover:bg-red-100 transition-colors flex items-center justify-center gap-2 group"
              >
                <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
                Log Out
              </button>
            </div>
          </div>)}

// --- Main App Component ---

export default function App() {
  const [activeView, setActiveView] = useState('dashboard'); // 'dashboard', 'addresses', 'payment', 'profile'
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  
  // User State
  const [user, setUser] = useState({
    name: "Alex Johnson",
    phone: "+1 (555) 012-3456",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    stats: { orders: 24, rating: 4.9, saved: 120 }
  });

  const handleUpdateProfile = (newData) => {
    setUser(prev => ({...prev, ...newData}));
    setActiveView('dashboard');
    // axios.post(`/api/user/${user.id}/updateprofile/`, newData)
    //   .then(response => {
    //     setUser(response.data);
    //     console.log("Profile updated successfully");
    //   })
    //   .catch(error => {
    //     console.error("Error updating profile:", error);
    //   }); 
    // }
  };

  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
      console.log("Logged out");
    }
  };

  // Mock Favorites
  const favorites = [
    { id: 1, name: 'Burger King', desc: 'Whopper Meal', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=150&q=80', logo: '🍔' },
    { id: 2, name: 'Pizza Hut', desc: 'Pepperoni Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150&q=80', logo: '🍕' },
    { id: 3, name: 'Sushi Master', desc: 'Dragon Roll', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=150&q=80', logo: '🍱' },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6] font-sans text-gray-800 pb-10">
      
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
          
          {/* --- Left Sidebar (Profile) --- */}
          {/* This column spans 4 on desktop, keeping profile always on left for large screens */}
          <ProfilePanel
            user={user}
            setActiveView={setActiveView}
            handleLogout={handleLogout}
          />

          {/* --- Right Main Content --- */}
          {/* This area changes based on interaction */}
          <div className="md:col-span-8 lg:col-span-9">
            
            {/* VIEW: Dashboard (Default) */}
            {activeView === 'dashboard' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Account Section */}
                <SectionCard 
                  title="Account" 
                  action={
                    <button 
                      onClick={() => setActiveView('profile')} 
                      className="text-sm font-semibold text-red-500 hover:text-red-600 transition"
                    >
                      Edit Profile
                    </button>
                  }
                >
                  <ListItem 
                    onClick={() => setActiveView('addresses')}
                    icon={MapPin} 
                    title="My Addresses" 
                    subtitle="Home, Work" 
                  />
                  <ListItem 
                    onClick={() => alert("Payment feature coming soon!")}
                    icon={CreditCard} 
                    title="Payment Methods" 
                    subtitle="Visa ending in 4242" 
                  />
                  <ListItem 
                    onClick={() => alert("History feature coming soon!")}
                    icon={History} 
                    title="Order History" 
                    subtitle="Reorder from past meals" 
                  />
                </SectionCard>

                {/* General Section */}
                <SectionCard title="General">
                  <ListItem 
                    icon={Bell} 
                    title="Push Notifications" 
                    subtitle="Manage your mobile alerts"
                    isRedIcon={false}
                    rightElement={
                      <ToggleSwitch 
                        enabled={notificationsEnabled} 
                        onChange={() => setNotificationsEnabled(!notificationsEnabled)} 
                      />
                    }
                  />
                  <ListItem 
                    onClick={() => alert("Support chat opening...")}
                    icon={HelpCircle} 
                    title="Help & Support" 
                    subtitle="FAQ and customer service" 
                    isRedIcon={false}
                  />
                  <ListItem 
                    icon={Moon} 
                    title="Appearance" 
                    subtitle="Switch between Light and Dark mode" 
                    isRedIcon={false}
                  />
                </SectionCard>

                {/* Recent Favorites Section */}
                <SectionCard title="Recent Favorites">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {favorites.map((item) => (
                      <div key={item.id} className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-100">
                        <div className="relative h-16 w-16 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="h-full w-full object-cover rounded-xl shadow-sm"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm text-xs border border-gray-100">
                            {item.logo}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-500 mb-1">{item.desc}</p>
                          <button className="text-xs font-bold text-red-500 hover:text-red-600 flex items-center gap-1 group-hover:underline">
                            Reorder
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </SectionCard>
              </div>
            )}

            {/* VIEW: Addresses */}
            {activeView === 'addresses' && (
              <AddressView onBack={() => setActiveView('dashboard')} />
            )}

            {/* VIEW: Edit Profile */}
            {activeView === 'profile' && (
              <EditProfileView 
                user={user} 
                onSave={handleUpdateProfile} 
                onBack={() => setActiveView('dashboard')} 
              />
            )}
            
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm">
            <div>
              <h4 className="font-bold text-gray-400 text-xs tracking-wider uppercase mb-4">About</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-red-500 transition">Company</a></li>
                <li><a href="#" className="hover:text-red-500 transition">Careers</a></li>
                <li><a href="#" className="hover:text-red-500 transition">News</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-400 text-xs tracking-wider uppercase mb-4">Legal</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-red-500 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-red-500 transition">Terms</a></li>
                <li><a href="#" className="hover:text-red-500 transition">Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-400 text-xs tracking-wider uppercase mb-4">Help</h4>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-red-500 transition">Support</a></li>
                <li><a href="#" className="hover:text-red-500 transition">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-400 text-xs tracking-wider uppercase mb-4">Social</h4>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="hover:text-blue-600 transition"><Facebook size={20} /></a>
                <a href="#" className="hover:text-blue-400 transition"><Twitter size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}