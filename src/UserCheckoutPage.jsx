import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  MapPin, 
  CreditCard, 
  Lock, 
  Clock, 
  Edit2, 
  ShoppingCart, 
  ChevronRight,
  Plus,
  Minus,
  Trash2,
  X,
  CheckCircle2,
  Wallet
} from 'lucide-react';

/**
 * Reusable Modal Backdrop
 */
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-8 border-b border-gray-50 flex justify-between items-center">
          <h3 className="text-xl font-black text-gray-900">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="p-8 max-h-[70vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

/**
 * Section Card Wrapper
 */
const SectionCard = ({ children, title, icon: Icon, rightElement, className = "" }) => (
  <div className={`bg-white rounded-[2rem] p-8 mb-6 border border-gray-100 shadow-sm ${className}`}>
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-3">
        {Icon && <Icon size={22} className="text-gray-700" />}
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      {rightElement}
    </div>
    {children}
  </div>
);

/**
 * Order Item Component
 */
const OrderItem = ({ item, onUpdateQuantity, onDelete }) => (
  <div className="flex gap-4 mb-6 group">
    <div className="relative flex-shrink-0">
      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-2xl object-cover bg-gray-100" />
    </div>
    <div className="flex-1 flex flex-col justify-center">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-gray-800 leading-tight">{item.name}</h3>
        <span className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
      </div>
      <p className="text-xs text-gray-400 font-medium mt-1">{item.customizations}</p>
      
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-1 border border-gray-100">
          <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-1.5 hover:bg-white hover:shadow-sm rounded-lg transition-all text-gray-500 disabled:opacity-30" disabled={item.quantity <= 1}>
            <Minus size={14} />
          </button>
          <span className="text-sm font-black text-gray-800 w-4 text-center">{item.quantity}</span>
          <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-1.5 hover:bg-white hover:shadow-sm rounded-lg transition-all text-gray-500">
            <Plus size={14} />
          </button>
        </div>
        <button onClick={() => onDelete(item.id)} className="text-gray-300 hover:text-red-500 p-2 transition-colors">
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  </div>
);

export default function App() {
  // --- States ---
  const [promo, setPromo] = useState('');
  const [instructions, setInstructions] = useState('');
  const [isApplying, setIsApplying] = useState(false);
  
  // Address State
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [address, setAddress] = useState({
    label: 'Home',
    street: '123 Main Street, Apt 4B',
    city: 'New York, NY 10001',
    note: 'Gate code is 1234'
  });
  const [tempAddress, setTempAddress] = useState({...address});

  // Payment State
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState({
    id: 'card_1',
    type: 'card',
    title: 'Visa ending in 4242',
    sub: 'Expires 12/25'
  });
  const [upiId, setUpiId] = useState('');

  // Cart State
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Spicy Chicken Burger",
      price: 24.00,
      quantity: 2,
      customizations: "Extra cheese, No onions",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Large Fries",
      price: 4.50,
      quantity: 1,
      customizations: "Standard Salt",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ]);

  // --- Helpers ---
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 0 ? 2.99 : 0;
  const serviceFee = subtotal > 0 ? 1.50 : 0;
  const total = subtotal + deliveryFee + serviceFee;

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));
  };

  const deleteItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const saveAddress = () => {
    setAddress(tempAddress);
    setIsAddressModalOpen(false);
  };

  const selectUPI = () => {
    if (upiId.includes('@')) {
      setSelectedPayment({
        id: 'upi_new',
        type: 'upi',
        title: upiId,
        sub: 'UPI Payment'
      });
      setIsPaymentModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans selection:bg-red-100 pb-20">
      {/* --- Navigation Bar --- */}
      <nav className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="p-2 group-hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft size={24} className="text-gray-700" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900">Checkout</span>
        </div>
        
        <div className="hidden md:flex gap-10 items-center text-gray-500 font-semibold text-sm">
          <span className="hover:text-black cursor-pointer">Home</span>
          <span className="hover:text-black cursor-pointer">Browse</span>
          <div className="relative cursor-pointer flex items-center gap-2 bg-red-50 text-red-500 px-4 py-2 rounded-full hover:bg-red-100 transition-colors">
            <ShoppingCart size={18} />
            <span className="text-sm font-bold">Cart</span>
            {totalItemsCount > 0 && (
              <div className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-black rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center border-2 border-white animate-in zoom-in duration-300">
                {totalItemsCount}
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto pt-28 px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* --- Left Column --- */}
        <div className="lg:col-span-8">
          
          {/* Header Map Visualization */}
          <div className="relative h-72 w-full rounded-[2.5rem] overflow-hidden mb-8 shadow-sm border border-gray-200 bg-gradient-to-b from-[#D4E4E6] to-[#E3EBE4]">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2D5A27_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur px-5 py-3 rounded-full shadow-xl flex items-center gap-3 text-sm font-bold text-gray-800">
              <Clock size={18} className="text-red-500" />
              25-35 min
            </div>
          </div>

          {/* Delivery Address Section */}
          <SectionCard 
            title="Delivery Address" 
            rightElement={
              <button 
                onClick={() => { setTempAddress({...address}); setIsAddressModalOpen(true); }}
                className="text-red-500 font-bold text-sm hover:underline flex items-center gap-1"
              >
                Change <Edit2 size={12}/>
              </button>
            }
          >
            <div className="flex gap-5">
              <div className="bg-red-50 p-4 rounded-3xl h-fit">
                <MapPin className="text-red-500" size={24} />
              </div>
              <div>
                <p className="font-extrabold text-lg text-gray-800">{address.label}</p>
                <p className="text-gray-500 font-medium">{address.street}, {address.city}</p>
                {address.note && (
                  <div className="flex items-center gap-1.5 mt-2 py-1 px-3 bg-gray-50 rounded-lg w-fit">
                    <span className="text-gray-400 text-xs font-semibold">Note:</span>
                    <span className="text-gray-500 text-xs font-bold italic">{address.note}</span>
                  </div>
                )}
              </div>
            </div>
          </SectionCard>

          {/* Payment Method Section */}
          <SectionCard 
            title="Payment Method" 
            rightElement={
              <button 
                onClick={() => setIsPaymentModalOpen(true)}
                className="text-red-500 font-bold text-sm hover:underline"
              >
                Switch
              </button>
            }
          >
            <div className="flex items-center justify-between border-2 border-gray-100 bg-gray-50/30 rounded-2xl p-5 group">
              <div className="flex items-center gap-5">
                <div className="bg-white border-2 border-gray-100 p-2.5 rounded-xl shadow-sm">
                  {selectedPayment.type === 'card' ? <CreditCard size={28} /> : <Wallet size={28} className="text-blue-500" />}
                </div>
                <div>
                  <p className="font-extrabold text-gray-800 text-lg">{selectedPayment.title}</p>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-tight">{selectedPayment.sub}</p>
                </div>
              </div>
              <CheckCircle2 size={24} className="text-green-500" />
            </div>
          </SectionCard>

          <SectionCard title="Special Instructions">
            <textarea 
              placeholder="e.g. Leave at door, ring doorbell..."
              className="w-full h-36 bg-[#F9FAFB] border border-gray-100 rounded-3xl p-6 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-red-500/5 focus:bg-white transition-all resize-none"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </SectionCard>
        </div>

        {/* --- Right Column: Order Summary --- */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm sticky top-28 h-fit">
            <h2 className="text-2xl font-black text-gray-900 mb-8">Order Summary</h2>
            
            <div className="max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
              {cartItems.map(item => (
                <OrderItem key={item.id} item={item} onUpdateQuantity={updateQuantity} onDelete={deleteItem} />
              ))}
              {cartItems.length === 0 && <p className="text-center text-gray-400 py-4 font-bold">Cart is empty</p>}
            </div>

            <div className="space-y-4 border-t-2 border-gray-50 pt-8 mt-8 mb-8">
              <div className="flex justify-between text-gray-500 font-bold text-sm">
                <span>Subtotal</span>
                <span className="text-gray-800">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500 font-bold text-sm">
                <span>Delivery Fee</span>
                <span className="text-gray-800">${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-800 font-black text-xl pt-4">
                <span>Total</span>
                <span className="text-[#FF3B30] tracking-tighter">${total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              disabled={cartItems.length === 0}
              className="w-full bg-[#FF3B30] hover:bg-[#E63429] text-white font-black py-5 rounded-3xl shadow-2xl shadow-red-200 transition-all active:scale-[0.98] flex justify-between px-8 items-center disabled:bg-gray-200 disabled:shadow-none"
            >
              <span className="text-lg">Place Order</span>
              <span className="text-lg opacity-90">${total.toFixed(2)}</span>
            </button>
          </div>
        </div>
      </main>

      {/* --- Modals --- */}
      
      {/* Address Modal */}
      <Modal isOpen={isAddressModalOpen} onClose={() => setIsAddressModalOpen(false)} title="Delivery Details">
        <div className="space-y-6">
          <div>
            <label className="text-xs font-black uppercase text-gray-400 ml-1">Address Label</label>
            <div className="flex gap-2 mt-2">
              {['Home', 'Work', 'Other'].map(l => (
                <button 
                  key={l}
                  onClick={() => setTempAddress({...tempAddress, label: l})}
                  className={`flex-1 py-3 rounded-2xl text-sm font-bold border-2 transition-all ${tempAddress.label === l ? 'border-red-500 bg-red-50 text-red-600' : 'border-gray-100 text-gray-500'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs font-black uppercase text-gray-400 ml-1">Street Address</label>
            <input 
              className="w-full mt-2 bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-100 font-bold text-gray-800"
              value={tempAddress.street}
              onChange={(e) => setTempAddress({...tempAddress, street: e.target.value})}
            />
          </div>
          <div>
            <label className="text-xs font-black uppercase text-gray-400 ml-1">Note to Driver</label>
            <input 
              className="w-full mt-2 bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-100 font-bold text-gray-800"
              placeholder="e.g. Ring doorbell twice"
              value={tempAddress.note}
              onChange={(e) => setTempAddress({...tempAddress, note: e.target.value})}
            />
          </div>
          <button onClick={saveAddress} className="w-full bg-black text-white py-5 rounded-3xl font-black text-lg shadow-xl active:scale-[0.98] transition-all">
            Save Address
          </button>
        </div>
      </Modal>

      {/* Payment Modal */}
      <Modal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} title="Select Payment">
        <div className="space-y-8">
          {/* Cards Section */}
          <div>
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 ml-1">Saved Cards</h4>
            <div 
              onClick={() => { setSelectedPayment({ id: 'card_1', type: 'card', title: 'Visa ending in 4242', sub: 'Expires 12/25' }); setIsPaymentModalOpen(false); }}
              className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all ${selectedPayment.id === 'card_1' ? 'border-red-500 bg-red-50' : 'border-gray-50 hover:border-gray-200'}`}
            >
              <div className="flex items-center gap-4">
                <CreditCard size={24} className={selectedPayment.id === 'card_1' ? 'text-red-500' : 'text-gray-400'} />
                <span className="font-extrabold text-gray-800">Visa ending in 4242</span>
              </div>
              {selectedPayment.id === 'card_1' && <CheckCircle2 size={20} className="text-red-500" />}
            </div>
          </div>

          {/* UPI Section */}
          <div>
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 ml-1">Pay via UPI</h4>
            <div className="space-y-4">
              <div className="relative">
                <input 
                  placeholder="Enter UPI ID (e.g. user@okaxis)"
                  className="w-full bg-gray-50 border border-gray-100 p-4 pr-24 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-100 font-bold text-gray-800"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />
                <button 
                  onClick={selectUPI}
                  disabled={!upiId.includes('@')}
                  className="absolute right-2 top-2 bottom-2 bg-black text-white px-4 rounded-xl text-xs font-black disabled:opacity-30 transition-opacity"
                >
                  Verify
                </button>
              </div>
              <p className="text-[10px] text-gray-400 font-bold px-2 uppercase tracking-tighter">Your VPA will be securely saved for future payments.</p>
            </div>
          </div>
        </div>
      </Modal>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Plus+Jakarta+Sans', sans-serif; overflow-x: hidden; }
      `}} />
    </div>
  );
}

