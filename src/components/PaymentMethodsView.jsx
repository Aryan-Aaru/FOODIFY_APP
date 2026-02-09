import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Plus, Trash2, Edit2, Check, Star } from 'lucide-react';
import SectionCard from './SectionCard';

const PaymentMethodsView = ({ onBack }) => {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'Visa',
      last4: '4242',
      expiry: '12/25',
      cardholderName: 'Jane Cooper',
      isDefault: true,
      icon: '💳'
    },
    {
      id: 2,
      type: 'Mastercard',
      last4: '8888',
      expiry: '06/26',
      cardholderName: 'Jane Cooper',
      isDefault: false,
      icon: '💳'
    }
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardholderName: '',
    expiry: '',
    cvv: '',
    isDefault: false
  });

  const handleDelete = (id) => {
    if (confirm('Delete this payment method?')) {
      setPaymentMethods(paymentMethods.filter(p => p.id !== id));
    }
  };

  const handleSetDefault = (id) => {
    setPaymentMethods(paymentMethods.map(p => ({
      ...p,
      isDefault: p.id === id
    })));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Extract card type from number (simple logic)
    const cardNumber = formData.cardNumber.replace(/\s/g, '');
    let type = 'Card';
    if (cardNumber.startsWith('4')) type = 'Visa';
    else if (cardNumber.startsWith('5')) type = 'Mastercard';
    else if (cardNumber.startsWith('3')) type = 'Amex';

    const newCard = {
      id: Date.now(),
      type,
      last4: cardNumber.slice(-4),
      expiry: formData.expiry,
      cardholderName: formData.cardholderName,
      isDefault: formData.isDefault,
      icon: '💳'
    };

    if (formData.isDefault) {
      setPaymentMethods([...paymentMethods.map(p => ({...p, isDefault: false})), newCard]);
    } else {
      setPaymentMethods([...paymentMethods, newCard]);
    }

    setIsAdding(false);
    setFormData({ cardNumber: '', cardholderName: '', expiry: '', cvv: '', isDefault: false });
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.slice(0, 2) + '/' + v.slice(2, 4);
    }
    return v;
  };

  if (isAdding) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={() => setIsAdding(false)} className="p-2 hover:bg-white rounded-full transition">
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <h2 className="text-2xl font-bold text-gray-900">Add Payment Method</h2>
        </div>

        <SectionCard>
          <form onSubmit={handleSubmit} className="space-y-5 p-2">
            {/* Card Number */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Card Number</label>
              <input
                type="text"
                required
                maxLength="19"
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                value={formData.cardNumber}
                onChange={(e) => setFormData({...formData, cardNumber: formatCardNumber(e.target.value)})}
                placeholder="1234 5678 9012 3456"
              />
            </div>

            {/* Cardholder Name */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Cardholder Name</label>
              <input
                type="text"
                required
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                value={formData.cardholderName}
                onChange={(e) => setFormData({...formData, cardholderName: e.target.value})}
                placeholder="Jane Cooper"
              />
            </div>

            {/* Expiry and CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Expiry Date</label>
                <input
                  type="text"
                  required
                  maxLength="5"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  value={formData.expiry}
                  onChange={(e) => setFormData({...formData, expiry: formatExpiry(e.target.value)})}
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">CVV</label>
                <input
                  type="text"
                  required
                  maxLength="4"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                  value={formData.cvv}
                  onChange={(e) => setFormData({...formData, cvv: e.target.value.replace(/\D/g, '')})}
                  placeholder="123"
                />
              </div>
            </div>

            {/* Default Checkbox */}
            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="defaultPayment"
                checked={formData.isDefault}
                onChange={(e) => setFormData({...formData, isDefault: e.target.checked})}
                className="rounded text-red-500 focus:ring-red-500"
              />
              <label htmlFor="defaultPayment" className="text-sm text-gray-600">Set as default payment method</label>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition flex justify-center items-center gap-2"
              >
                <Check size={18} /> Add Card
              </button>
            </div>
          </form>
        </SectionCard>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-2">
        <button onClick={onBack} className="p-2 hover:bg-white rounded-full transition">
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">Payment Methods</h2>
      </div>

      <div className="space-y-4">
        {paymentMethods.map((card) => (
          <div key={card.id} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-lg text-white group relative overflow-hidden">
            {/* Card Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="text-3xl">{card.icon}</div>
                {card.isDefault && (
                  <div className="flex items-center gap-1 bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">
                    <Star size={12} fill="currentColor" />
                    <span className="text-xs font-semibold">Default</span>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <div className="text-xl font-mono tracking-wider mb-1">
                  •••• •••• •••• {card.last4}
                </div>
                <div className="text-xs text-gray-400">{card.type}</div>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs text-gray-400 mb-1">CARDHOLDER</div>
                  <div className="font-semibold">{card.cardholderName}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">EXPIRES</div>
                  <div className="font-semibold">{card.expiry}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {!card.isDefault && (
                  <button
                    onClick={() => handleSetDefault(card.id)}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
                    title="Set as default"
                  >
                    <Star size={16} />
                  </button>
                )}
                <button
                  onClick={() => handleDelete(card.id)}
                  className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded-full transition"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Card Button */}
      <button
        onClick={() => setIsAdding(true)}
        className="w-full py-4 bg-red-500 text-white rounded-2xl font-bold hover:bg-red-600 transition flex justify-center items-center gap-2 shadow-md shadow-red-500/20"
      >
        <Plus size={20} /> Add New Card
      </button>

      {/* Info Note */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
        <p className="text-sm text-blue-900">
          <strong>Secure Payment:</strong> All payment information is encrypted and securely stored. We never share your card details.
        </p>
      </div>
    </div>
  );
};

export default PaymentMethodsView;