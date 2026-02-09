import React from 'react';
import { ChevronRight } from 'lucide-react';

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

export default ListItem;
