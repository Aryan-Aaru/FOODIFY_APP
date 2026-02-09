import React, { useState } from 'react';
import ProfilePanel from './components/ProfilePanel';
import DashboardView from './components/DashboardView';
import AddressView from './components/AddressView';
import EditProfileView from './components/EditProfileView';
import OrderHistoryView from './components/OrderHistoryView';
import PaymentMethodsView from './components/PaymentMethodsView';
import SupportView from './components/SupportView';
import AppearanceView from './components/AppearanceView';
import Footer from './components/Footer';

export default function Profile() {
  const [activeView, setActiveView] = useState('dashboard');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [user, setUser] = useState({
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    phone: "+1 (555) 123-4567",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    stats: { orders: 24, rating: 4.9, saved: 120 }
  });

  const handleUpdateProfile = (newData) => {
    setUser(prev => ({...prev, ...newData}));
    setActiveView('dashboard');
    // API call would go here:
    // axios.post(`/api/user/${user.id}/updateprofile/`, newData)
    //   .then(response => {
    //     setUser(response.data);
    //     console.log("Profile updated successfully");
    //   })
    //   .catch(error => {
    //     console.error("Error updating profile:", error);
    //   });
  };

  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
      console.log("Logged out");
      // Handle logout logic here
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] font-sans text-gray-800 pb-10">
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
          
          {/* Left Sidebar - Profile Panel */}
          <ProfilePanel
            user={user}
            setActiveView={setActiveView}
            handleLogout={handleLogout}
          />

          {/* Right Main Content Area */}
          <div className="md:col-span-8 lg:col-span-9">
            
            {/* Dashboard View */}
            {activeView === 'dashboard' && (
              <DashboardView 
                setActiveView={setActiveView}
                notificationsEnabled={notificationsEnabled}
                setNotificationsEnabled={setNotificationsEnabled}
              />
            )}

            {/* Addresses View */}
            {activeView === 'addresses' && (
              <AddressView onBack={() => setActiveView('dashboard')} />
            )}

            {/* Edit Profile View */}
            {activeView === 'profile' && (
              <EditProfileView 
                user={user} 
                onSave={handleUpdateProfile} 
                onBack={() => setActiveView('dashboard')} 
              />
            )}

            {/* Order History View */}
            {activeView === 'history' && (
              <OrderHistoryView onBack={() => setActiveView('dashboard')} />
            )}

            {/* Payment Methods View */}
            {activeView === 'payment' && (
              <PaymentMethodsView onBack={() => setActiveView('dashboard')} />
            )}

            {/* Support View */}
            {activeView === 'support' && (
              <SupportView onBack={() => setActiveView('dashboard')} />
            )}

            {/* Appearance View */}
            {activeView === 'appearance' && (
              <AppearanceView onBack={() => setActiveView('dashboard')} />
            )}
            
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}