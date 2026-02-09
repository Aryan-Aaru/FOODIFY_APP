import React, { useState } from 'react';
import { ArrowLeft, Package, Clock, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import SectionCard from './SectionCard';

const OrderHistoryView = ({ onBack }) => {
  const [orders] = useState([
    {
      id: 'ORD-2024-001',
      date: '2024-02-05',
      restaurant: 'Burger King',
      items: ['Whopper Meal', 'Fries', 'Coke'],
      total: 18.99,
      status: 'delivered',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=150&q=80'
    },
    {
      id: 'ORD-2024-002',
      date: '2024-02-03',
      restaurant: 'Pizza Hut',
      items: ['Large Pepperoni Pizza', 'Garlic Bread'],
      total: 24.50,
      status: 'delivered',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150&q=80'
    },
    {
      id: 'ORD-2024-003',
      date: '2024-02-01',
      restaurant: 'Sushi Master',
      items: ['Dragon Roll', 'California Roll', 'Miso Soup'],
      total: 32.00,
      status: 'delivered',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=150&q=80'
    },
    {
      id: 'ORD-2024-004',
      date: '2024-01-28',
      restaurant: 'Taco Bell',
      items: ['Crunchy Taco Supreme x3', 'Nachos'],
      total: 15.75,
      status: 'cancelled',
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=150&q=80'
    },
    {
      id: 'ORD-2024-005',
      date: '2024-01-25',
      restaurant: 'KFC',
      items: ['Bucket Meal', 'Coleslaw', 'Biscuits'],
      total: 28.99,
      status: 'delivered',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=150&q=80'
    }
  ]);

  const getStatusConfig = (status) => {
    switch (status) {
      case 'delivered':
        return {
          icon: CheckCircle,
          color: 'text-green-500',
          bgColor: 'bg-green-50',
          label: 'Delivered'
        };
      case 'cancelled':
        return {
          icon: XCircle,
          color: 'text-red-500',
          bgColor: 'bg-red-50',
          label: 'Cancelled'
        };
      case 'processing':
        return {
          icon: Clock,
          color: 'text-yellow-500',
          bgColor: 'bg-yellow-50',
          label: 'Processing'
        };
      default:
        return {
          icon: Package,
          color: 'text-gray-500',
          bgColor: 'bg-gray-50',
          label: 'Unknown'
        };
    }
  };

  const handleReorder = (order) => {
    alert(`Reordering from ${order.restaurant}...`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-2">
        <button onClick={onBack} className="p-2 hover:bg-white rounded-full transition">
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">Order History</h2>
      </div>

      <div className="space-y-4">
        {orders.map((order) => {
          const statusConfig = getStatusConfig(order.status);
          const StatusIcon = statusConfig.icon;

          return (
            <div key={order.id} className="bg-white p-5 rounded-3xl shadow-sm border border-transparent hover:border-red-100 transition group">
              <div className="flex gap-4">
                {/* Order Image */}
                <div className="h-20 w-20 flex-shrink-0 rounded-xl overflow-hidden">
                  <img 
                    src={order.image} 
                    alt={order.restaurant} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Order Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{order.restaurant}</h3>
                      <p className="text-xs text-gray-500">Order #{order.id}</p>
                    </div>
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${statusConfig.bgColor}`}>
                      <StatusIcon size={14} className={statusConfig.color} />
                      <span className={`text-xs font-semibold ${statusConfig.color}`}>
                        {statusConfig.label}
                      </span>
                    </div>
                  </div>

                  {/* Items */}
                  <p className="text-sm text-gray-600 mb-2">
                    {order.items.join(', ')}
                  </p>

                  {/* Footer */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500">{order.date}</p>
                      <p className="text-lg font-bold text-gray-900">${order.total.toFixed(2)}</p>
                    </div>
                    {order.status === 'delivered' && (
                      <button 
                        onClick={() => handleReorder(order)}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-xl font-semibold text-sm hover:bg-red-600 transition opacity-0 group-hover:opacity-100"
                      >
                        <RefreshCw size={16} />
                        Reorder
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {orders.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center">
          <Package size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">No Orders Yet</h3>
          <p className="text-sm text-gray-500">Start ordering to see your history here</p>
        </div>
      )}
    </div>
  );
};

export default OrderHistoryView;