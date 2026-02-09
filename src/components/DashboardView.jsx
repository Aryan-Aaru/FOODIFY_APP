import React from 'react';
import { MapPin, CreditCard, History, Bell, HelpCircle, Moon } from 'lucide-react';
import SectionCard from './SectionCard';
import ListItem from './ListItem';
import ToggleSwitch from './ToggleSwitch';

const DashboardView = ({ setActiveView, notificationsEnabled, setNotificationsEnabled }) => {
  const favorites = [
    { id: 1, name: 'Burger King', desc: 'Whopper Meal', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=150&q=80', logo: '🍔' },
    { id: 2, name: 'Pizza Hut', desc: 'Pepperoni Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150&q=80', logo: '🍕' },
    { id: 3, name: 'Sushi Master', desc: 'Dragon Roll', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=150&q=80', logo: '🍱' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Account Section */}
      <SectionCard title="Account">
        <ListItem 
          onClick={() => setActiveView('addresses')}
          icon={MapPin} 
          title="My Addresses" 
          subtitle="Home, Work" 
        />
        <ListItem 
          onClick={() => setActiveView('payment')}
          icon={CreditCard} 
          title="Payment Methods" 
          subtitle="Visa ending in 4242" 
        />
        <ListItem 
          onClick={() => setActiveView('history')}
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
          onClick={() => setActiveView('support')}
          icon={HelpCircle} 
          title="Help & Support" 
          subtitle="FAQ and customer service" 
          isRedIcon={false}
        />
        <ListItem 
          onClick={() => setActiveView('appearance')}
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
  );
};

export default DashboardView;